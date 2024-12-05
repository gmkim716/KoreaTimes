import json
import os

def read_json_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print(f"오류: {filename} 파일을 찾을 수 없습니다.")
        return None
    except json.JSONDecodeError:
        print(f"오류: {filename} 파일의 JSON 형식이 올바르지 않습니다.")
        return None

def save_json_file(filename, data):
    try:
        with open(filename, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
        print(f"성공적으로 {filename}에 데이터를 저장했습니다.")
    except Exception as e:
        print(f"파일 저장 중 오류 발생: {e}")


def main():
    # 현재 스크립트의 절대 경로 가져오기
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # JSON 파일 경로 설정
    membersfilename = os.path.join(script_dir, 'national-assembly-members.json')
    membersEnName = os.path.join(script_dir, 'enNameArr.json')

    members = read_json_file(membersfilename)
    enNames = read_json_file(membersEnName)

   # 데이터 가공
    if members and enNames:
        for i in range(len(members)):
            members[i]['enName'] = enNames[i]

        # 수정된 데이터 저장
        output_filename = os.path.join(script_dir, 'updated-members.json')
        save_json_file(output_filename, members)

if __name__ == '__main__':
    main()
