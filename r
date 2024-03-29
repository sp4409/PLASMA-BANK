import pandas as pd
import requests
import os
from urllib.parse import urlparse

# Load the Excel file containing clickable links
excel_file = 'links.xlsx'  # Replace with the path to your Excel file
df = pd.read_excel(excel_file)

# Create a directory to store the downloaded HTML files (if it doesn't exist)
output_directory = 'downloaded_html'
os.makedirs(output_directory, exist_ok=True)

# Define a function to download HTML from a URL and save it
def download_html_from_link(link, output_dir):
    try:
        response = requests.get(link)
        if response.status_code == 200:
            # Extract the filename from the URL
            parsed_url = urlparse(link)
            filename = os.path.join(output_dir, os.path.basename(parsed_url.path))
            
            with open(filename, 'wb') as file:
                file.write(response.content)
                
            print(f"Downloaded and saved {filename}")
        else:
            print(f"Failed to download {link}. Status code: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {link}: {e}")

# Iterate through the Excel cells with clickable links and download HTML
for index, row in df.iterrows():
    clickable_link = row['ClickableLinkColumn']  # Replace with your column name
    download_html_from_link(clickable_link, output_directory)

print("HTML files downloaded successfully.")


//////////////////////////////////////////////////////////////

# Function to download HTML files into a folder and rename them with ARTICLE_TITLE
def download_html_file(url, folder_path, article_title):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            file_name = urlparse(url).path.split('/')[-1]
            
            # Use ARTICLE_TITLE as the new file name (replace spaces with underscores)
            new_file_name = f"{article_title.replace(' ', '_')}.html"
            
            file_path = os.path.join(folder_path, new_file_name)
            with open(file_path, 'wb') as file:
                file.write(response.content)
            print(f"Downloaded and renamed: {new_file_name}")
        else:
            print(f"Download Failed: {url}")
    except Exception as e:
        print(f"Download Error for {url}: {str(e)}")

# ...

# Inside your loop for downloading files
for index, row in df.iterrows():
    cell_address = f'K{index + 2}'  # Adjust the cell address as needed
    url = get_hyperlink_address(excel_file, sheet_name, cell_address)
    article_title = row['ARTICLE_TITLE']  # Get ARTICLE_TITLE for the current row
    if url:
        download_html_file(url, output_folder, article_title)
    else:
        print(f"No hyperlink found in cell {cell_address}.")

