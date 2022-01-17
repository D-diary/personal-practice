# Chapter06_04. 가장 흔한 단어 (151p)
# 난이도 : ★☆
# Leet code Num. : 819

# 금지된 단어를 제외한 가장 흔하게 등장하는 단어를 출력하라. 대소문자 구분을 하지 않으며, 구두점 (마침표, 쉼표) 또한 무시한다.

# 예제 1.
# 입력 >> paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
#        banned = ["hit"]
# 출력 >> "ball"

###############################################
import collections

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
print("ori :", paragraph)
def count_paragraph(str):
  finish = []
  list = str.lower().replace(" ","").replace("h","").replace("i","").replace("t","")
  print("lowercaselist :", list)
  count = collections.Counter(list)
  print("count :", count)
  result = count.most_common(3)
  print("result : ", result)
  b = result[2][0]
  print(b)
  a = result[0][0]
  print(a)
  l = result[1][0]
  print(l)
  finish = b + a + l + l
  print(finish)
  # b = result.pop()
  # print(b[0])
  # a = result.pop(0)
  # print(a[0])
  # print(result)
  # l = result.pop(0)
  # print(l[0])
  # finish =  b + a + l + l


print(count_paragraph(paragraph))
###############################################
## 정리
import collections

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
def count_paragraph(str):
  list = str.lower().replace(" ","").replace("h","").replace("i","").replace("t","")
  count = collections.Counter(list)
  most = count.most_common(3)
  b = most[2][0]
  a = most[0][0]
  l = most[1][0]
  finish = b + a + l + l
  print(finish)


print(count_paragraph(paragraph))
###############################################
##개선

import collections
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
def count_paragraph(str):
  list = str.lower().split()
  