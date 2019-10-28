#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Oct  9 18:28:02 2019

@author: silviakocsisovaCB5
"""

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
