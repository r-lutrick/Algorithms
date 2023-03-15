from typing import List
# Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

# A string is palindromic if it reads the same forward and backward.


# Example 1:

# Input: words = ["abc","car","ada","racecar","cool"]
# Output: "ada"
# Explanation: The first string that is palindromic is "ada".
# Note that "racecar" is also palindromic, but it is not the first.
# Example 2:

# Input: words = ["notapalindrome","racecar"]
# Output: "racecar"
# Explanation: The first and only string that is palindromic is "racecar".
# Example 3:

# Input: words = ["def","ghi"]
# Output: ""
# Explanation: There are no palindromic strings, so the empty string is returned.


# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 100
# words[i] consists only of lowercase English letters.

words1 = ["abc", "car", "ada", "racecar", "cool"]
words2 = ["notapalindrome", "racecar"]
words3 = ["def", "ghi"]


class Solution:
    def firstPalindrome(self, words):
        for word in words:
            if self.isPalindrome(word):
                return word
        return ""

    def isPalindrome(self, word):
        l, r = 0, len(word)-1
        while l < r:
            if word[l] != word[r]:
                return False
            l += 1
            r -= 1
        return True


print(Solution().firstPalindrome(words1))
print(Solution().firstPalindrome(words2))
print(Solution().firstPalindrome(words3))
