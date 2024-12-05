import requests
from bs4 import BeautifulSoup
import pandas as pd

class Crawler:
    def __init__(self, base_url):
        self.base_url = base_url
    
    def fetch_data(self):
        response = requests.get(self.base_url)
        return BeautifulSoup(response.text, 'html.parser')
    
    def parse_members(self, soup):
        members = []
        # 실제 웹사이트 구조에 맞게 수정 필요
        for member in soup.find_all('div', class_='member'):
            name = member.find('h2').text
            party = member.find('span', class_='party').text
            
            members.append({
                'name': name,
                'party': party
            })
        
        return members
    
    def save_to_json(self, members, filename='data/members.json'):
        df = pd.DataFrame(members)
        df.to_json(filename, orient='records', force_ascii=False)
        print(f"Data saved to {filename}")

def main():
    crawler = Crawler('https://example.com')
    soup = crawler.fetch_data()
    members = crawler.parse_members(soup)
    crawler.save_to_json(members)

if __name__ == "__main__":
    main()