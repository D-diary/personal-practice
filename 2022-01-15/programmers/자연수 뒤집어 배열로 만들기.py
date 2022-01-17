
n = 12345

################
# def solution(n):
#     answer = [] # answer에 빈 리스트
#     a = int(n) # a에 
#     b = list(map(int, str(a)[::-1]))

#     return b

# print(solution(n))

# def solution(n):
#     answer = []
#     a = int(n)
#     b = list(map(int, str(a)[::-1]))
    
#     return b

def solution(n):
  a = []
  a = list(map(int, str(n)[::-1]))
  return a
print(solution(n))