# Chapter06_04. 가장 흔한 단어 (151p)
# 난이도 : ★☆
# Leet code Num. : 819

# 금지된 단어를 제외한 가장 흔하게 등장하는 단어를 출력하라. 대소문자 구분을 하지 않으며, 구두점 (마침표, 쉼표) 또한 무시한다.

# 예제 1.
# 입력 >> paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
#        banned = ["hit"]
# 출력 >> "ball"


###############################################
##개선

import collections
from collections import Counter

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

def count_paragraph(str):
  list = str.lower().split()
  print(list)
  list2 = " ".join(list)
  print(list2)
  list3 = list2.remove("hit")
  print(list3)
  count = collections.Counter(list3)
  print(count)
  most = count.most_common(1)[0][0]
  print(most)



print(count_paragraph(paragraph))
