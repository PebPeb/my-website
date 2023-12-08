import os
import random
from faker import Faker
from datetime import datetime, timedelta
import shutil

fake = Faker()

def generate_md_content(category):
    title = fake.sentence()[:-1]  # Remove trailing period
    date = (datetime.now() - timedelta(days=random.randint(1, 365))).strftime("%Y-%m-%d %H:%M")

    content = f"Title: {title}\nDate: {date}\nCategory: {category}\n\n"

    for _ in range(random.randint(5, 12)):
        paragraph = ""
        word_count = 0
        paragraph += fake.sentence()
        while word_count < random.randint(100, 250):
            paragraph += " " + fake.sentence()
            word_count = len(paragraph.split())

        content += paragraph + "\n\n"

    return content

def remove_folder(folder_path):
    if os.path.exists(folder_path):
        try:
            shutil.rmtree(folder_path)
        except Exception as e:
            pass

def generate_md_files():
    output_folder = "test_data"
    remove_folder(output_folder)
    os.makedirs(output_folder, exist_ok=True)

    generate = [
        {"Category": "Post", "Directory":"/posts"}, 
        {"Category": "Project", "Directory":"/projects"}
        ]

    for x in generate:
        for i in range(1, random.randint(20,35)):
            file_name = x["Category"] + f"_{i}.md"
            
            os.makedirs(output_folder + x["Directory"], exist_ok=True)
            file_path = os.path.join(output_folder + x["Directory"], file_name)

            with open(file_path, "w") as file:
                file.write(generate_md_content(x["Category"]))

if __name__ == "__main__":
    generate_md_files()
    print("Testing Files Generated")
