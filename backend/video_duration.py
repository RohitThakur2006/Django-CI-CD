import os
import csv
from moviepy import VideoFileClip
import re

# Change this to your main folder path
BASE_FOLDER = r"D:\Tutedude\Tutedude Videos\New videos"

OUTPUT_FILE = "video_durations.csv"

def format_time(seconds):
    hrs = int(seconds // 3600)
    mins = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    return f"{hrs:02d}:{mins:02d}:{secs:02d}"

def get_sort_key(filename):
    match = re.match(r"(\d+)", filename)
    return int(match.group(1)) if match else float('inf')

data = []

for root, dirs, files in os.walk(BASE_FOLDER):
    video_number = 1  # reset for each folder

    for file in sorted(files, key=get_sort_key):  # sorted for consistent numbering
        if file.endswith((".mp4", ".mkv", ".avi", ".mov")):
            file_path = os.path.join(root, file)

            try:
                clip = VideoFileClip(file_path)
                duration = clip.duration
                clip.close()

                # Get folder name (last part of path)
                directory_name = os.path.basename(root).lstrip("1234567890. ")

                # Remove extension
                video_name = os.path.splitext(file)[0].lstrip("1234567890. ")

                data.append([
                    directory_name,
                    video_number,
                    video_name,
                    format_time(duration)
                ])

                video_number += 1

            except Exception as e:
                print(f"Error reading {file}: {e}")

# Write to CSV
with open(OUTPUT_FILE, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["Directory", "Video Number", "Video Name", "Duration"])
    writer.writerows(data)

print(f"\nCSV file created: {OUTPUT_FILE}")
