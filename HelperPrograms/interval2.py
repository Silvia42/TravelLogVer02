#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Oct  9 17:24:43 2019

@author: silviakocsisovaCB5
"""

a=3
b=5

def timeinterval(a,b):
    # a<=b
    if a>b or a<0 or b<0: return "error"
    r=""
    for i in range(b+1):
        cond = a<=i<=b
        r+='|'*cond+'_'*(not cond)
    return r

def timeinterval2(a,b):
    # a<=b
    if a>b or a<0 or b<0: return "error"
    return "_"*(a-1)+'|'*(b-a+1)


print(timeinterval(3,5))
print(timeinterval(-2,-5))
print(timeinterval(0,0))
print(timeinterval(13,5))

print(timeinterval2(3,5))
print(timeinterval2(-2,-5))
print(timeinterval2(0,0))
print(timeinterval2(13,5))


arr=[[3,5],[1,4],[2,6]]

for x in arr:
    print(timeinterval(*x))
 
maxInArr=lambda arr: max(list(map(lambda x:x[1],arr)))

print("Maximum right item in array is:",maxInArr(arr))
    
M=maxInArr(arr)

for x in arr:
    b=timeinterval(*x)
    print(b+(M-len(b))*'_')
 
#######################################################    
maxInArr=lambda arr: max(list(map(lambda x:x[1],arr)))    
def MergingIntervals(arrayOfIntervals):
    r = ['_'] * (maxInArr(arrayOfIntervals)+1)
    for x in arrayOfIntervals:
        r[x[0]:x[1]+1] = ['|']*(x[1]-x[0]+1)
    return ''.join(r)
        
     
arr=[[3,5],[1,4],[2,6]]
print('Merged Intervals:',MergingIntervals(arr))
   
arr=[[3,5],[1,4],[2,6],[9,10]]
print('Merged Intervals:',MergingIntervals(arr))   
    
    
