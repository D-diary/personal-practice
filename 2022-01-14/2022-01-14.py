### 첫번째 시도 ###
def solution(s):
  a = s[0].lower()
  b = s[-1].lower()
  if s.count(a) == s.count(b):
    return True
  else:
    return False
### 53점 ......또륵.....


#### 최종 통과 답안 ####
def solution(s):
    a = s.lower()
    if a.count('p') != a.count('y'):
        return False
    
    return True
    
print(solution('pPoooyY'))
print(solution('Pyy'))

### 성공시키고 싶은 로직
def solution(s):
    
    l = list(s.lower())
    while len(l) > 1:
        if l.pop(0) != l.pop():
            return False
        else:
            continue
            
        return True

### 졸리니 다음에...

### 팀원분들 답안 ###
## ㄱㄹ님
# 문자열 내 p와 y의 개수
# 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
# 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
# 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
#
# 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

def solution(s):
    strings = s.lower()
    p_count = strings.count('p')
    y_count = strings.count('y')

    return(p_count == y_count)

print(solution('pPoooyY'))
print(solution('Pyy'))

## ㅅㅎ님
def solution(s):
    s = s.lower()
    p = s.count('p')
    y = s.count('y')
    return p == y

solution("pPoooyY") 

### ㅇㅇ님
def solution(s):
    a = s.lower() # 소문자

    if a.count("p") == 0 and a.count("y") == 0: # 둘 다 0인가요?
        return True

    if a.count("p") != a.count("y"): # 갯수 비교
        return False

    return True

### 프로그래머스 베스트
def solution(s):
  return s.lower().count('p') == s.lower().count('y')
