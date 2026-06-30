<
!
-
-


S
P
D
X
-
F
i
l
e
C
o
p
y
r
i
g
h
t
T
e
x
t
:
 
2
0
2
6
 
o
p
e
n
D
e
s
k
 
E
d
u
 
C
o
n
t
r
i
b
u
t
o
r
s


S
P
D
X
-
L
i
c
e
n
s
e
-
I
d
e
n
t
i
f
i
e
r
:
 
A
p
a
c
h
e
-
2
.
0


-
-
>




#
 
P
e
r
f
o
r
m
a
n
c
e
 
&
 
S
L
A




#
#
 
P
u
r
p
o
s
e




D
e
f
i
n
e
s
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
O
b
j
e
c
t
i
v
e
s
 
(
S
L
O
s
)
,
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
I
n
d
i
c
a
t
o
r
s
 
(
S
L
I
s
)
,
 
a
n
d


p
e
r
f
o
r
m
a
n
c
e
 
b
a
s
e
l
i
n
e
s
 
f
o
r
 
a
l
l
 
o
p
e
n
D
e
s
k
 
E
d
u
 
s
e
r
v
i
c
e
s
,
 
a
l
i
g
n
e
d
 
w
i
t
h
 
H
R
Z
'
s


o
p
e
r
a
t
i
o
n
a
l
 
r
e
q
u
i
r
e
m
e
n
t
s
 
a
n
d
 
s
t
u
d
e
n
t
 
s
e
m
e
s
t
e
r
 
c
y
c
l
e
s
.




#
#
 
N
o
n
-
G
o
a
l
s




-
 
D
a
t
a
b
a
s
e
-
l
e
v
e
l
 
p
e
r
f
o
r
m
a
n
c
e
 
t
u
n
i
n
g
 
(
s
e
r
v
i
c
e
-
s
p
e
c
i
f
i
c
,
 
s
e
e
 
i
n
d
i
v
i
d
u
a
l
 
s
p
e
c
s
)


-
 
C
D
N
/
s
t
a
t
i
c
 
a
s
s
e
t
 
o
p
t
i
m
i
z
a
t
i
o
n
 
(
b
e
y
o
n
d
 
H
A
P
r
o
x
y
 
i
n
g
r
e
s
s
)




#
#
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
O
b
j
e
c
t
i
v
e
s
 
(
S
L
O
s
)




S
L
O
s
 
d
e
f
i
n
e
 
t
h
e
 
a
c
c
e
p
t
a
b
l
e
 
p
e
r
f
o
r
m
a
n
c
e
 
b
o
u
n
d
a
r
i
e
s
 
p
e
r
 
s
e
r
v
i
c
e
 
t
i
e
r
:




|
 
T
i
e
r
 
|
 
S
e
r
v
i
c
e
 
T
y
p
e
s
 
|
 
A
v
a
i
l
a
b
i
l
i
t
y
 
|
 
L
a
t
e
n
c
y
 
(
P
9
5
)
 
|
 
E
r
r
o
r
 
R
a
t
e
 
|


|
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
*
*
C
r
i
t
i
c
a
l
*
*
 
|
 
I
d
P
,
 
d
a
t
a
b
a
s
e
s
,
 
f
i
l
e
 
s
t
o
r
a
g
e
 
|
 
9
9
.
9
%
 
|
 
<
1
0
0
m
s
 
|
 
<
0
.
1
%
 
|


|
 
*
*
H
i
g
h
*
*
 
|
 
P
o
r
t
a
l
,
 
c
o
r
e
 
s
e
r
v
i
c
e
s
 
|
 
9
9
.
5
%
 
|
 
<
2
5
0
m
s
 
|
 
<
0
.
5
%
 
|


|
 
*
*
S
t
a
n
d
a
r
d
*
*
 
|
 
L
M
S
,
 
c
o
l
l
a
b
o
r
a
t
i
o
n
 
t
o
o
l
s
 
|
 
9
9
.
0
%
 
|
 
<
5
0
0
m
s
 
|
 
<
1
.
0
%
 
|


|
 
*
*
L
o
w
*
*
 
|
 
S
u
p
p
o
r
t
i
n
g
 
t
o
o
l
s
 
|
 
T
B
D
 
|
 
T
B
D
 
|
 
T
B
D
 
|




#
#
#
 
C
r
i
t
i
c
a
l
 
T
i
e
r
 
S
L
O
s




|
 
S
e
r
v
i
c
e
 
|
 
A
v
a
i
l
a
b
i
l
i
t
y
 
T
a
r
g
e
t
 
|
 
L
a
t
e
n
c
y
 
T
a
r
g
e
t
 
(
P
9
5
)
 
|
 
E
r
r
o
r
 
R
a
t
e
 
T
a
r
g
e
t
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
9
9
.
9
%
 
|
 
<
1
0
0
m
s
 
|
 
<
0
.
1
%
 
|


|
 
P
o
s
t
g
r
e
S
Q
L
 
|
 
9
9
.
9
%
 
|
 
<
5
0
m
s
 
(
q
u
e
r
y
)
 
|
 
<
0
.
1
%
 
|


|
 
M
a
r
i
a
D
B
 
|
 
9
9
.
9
%
 
|
 
<
5
0
m
s
 
(
q
u
e
r
y
)
 
|
 
<
0
.
1
%
 
|


|
 
R
e
d
i
s
 
|
 
9
9
.
9
%
 
|
 
<
1
0
m
s
 
(
c
a
c
h
e
 
h
i
t
)
 
|
 
<
0
.
1
%
 
|


|
 
M
i
n
I
O
/
S
3
 
|
 
9
9
.
9
%
 
|
 
<
1
0
0
m
s
 
(
o
b
j
e
c
t
 
g
e
t
)
 
|
 
<
0
.
1
%
 
|




#
#
#
 
H
i
g
h
 
T
i
e
r
 
S
L
O
s




|
 
S
e
r
v
i
c
e
 
|
 
A
v
a
i
l
a
b
i
l
i
t
y
 
T
a
r
g
e
t
 
|
 
L
a
t
e
n
c
y
 
T
a
r
g
e
t
 
(
P
9
5
)
 
|
 
E
r
r
o
r
 
R
a
t
e
 
T
a
r
g
e
t
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
N
u
b
u
s
 
P
o
r
t
a
l
 
|
 
9
9
.
5
%
 
|
 
<
2
0
0
m
s
 
|
 
<
0
.
5
%
 
|


|
 
I
n
t
e
r
c
o
m
 
S
e
r
v
i
c
e
 
|
 
9
9
.
5
%
 
|
 
<
1
5
0
m
s
 
|
 
<
0
.
5
%
 
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
9
9
.
5
%
 
|
 
<
2
5
0
m
s
 
|
 
<
0
.
5
%
 
|


|
 
O
p
e
n
C
l
o
u
d
 
|
 
9
9
.
5
%
 
|
 
<
2
0
0
m
s
 
|
 
<
0
.
5
%
 
|


|
 
O
X
 
A
p
p
S
u
i
t
e
 
|
 
9
9
.
5
%
 
|
 
<
2
5
0
m
s
 
(
I
M
A
P
)
 
|
 
<
0
.
5
%
 
|


|
 
S
O
G
o
 
|
 
9
9
.
5
%
 
|
 
<
2
5
0
m
s
 
(
I
M
A
P
)
 
|
 
<
0
.
5
%
 
|


|
 
E
l
e
m
e
n
t
 
|
 
9
9
.
5
%
 
|
 
<
3
0
0
m
s
 
(
s
y
n
c
)
 
|
 
<
0
.
5
%
 
|




#
#
#
 
S
t
a
n
d
a
r
d
 
T
i
e
r
 
S
L
O
s




|
 
S
e
r
v
i
c
e
 
|
 
A
v
a
i
l
a
b
i
l
i
t
y
 
T
a
r
g
e
t
 
|
 
L
a
t
e
n
c
y
 
T
a
r
g
e
t
 
(
P
9
5
)
 
|
 
E
r
r
o
r
 
R
a
t
e
 
T
a
r
g
e
t
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
I
L
I
A
S
 
|
 
9
9
.
0
%
 
|
 
<
5
0
0
m
s
 
(
p
a
g
e
 
l
o
a
d
)
 
|
 
<
1
.
0
%
 
|


|
 
M
o
o
d
l
e
 
|
 
9
9
.
0
%
 
|
 
<
5
0
0
m
s
 
(
p
a
g
e
 
l
o
a
d
)
 
|
 
<
1
.
0
%
 
|


|
 
B
i
g
B
l
u
e
B
u
t
t
o
n
 
|
 
9
9
.
0
%
 
|
 
<
1
0
0
0
m
s
 
(
s
e
s
s
i
o
n
 
s
e
t
u
p
)
 
|
 
<
1
.
0
%
 
|


|
 
J
i
t
s
i
 
|
 
9
9
.
0
%
 
|
 
<
1
0
0
0
m
s
 
(
r
o
o
m
 
j
o
i
n
)
 
|
 
<
1
.
0
%
 
|


|
 
C
o
l
l
a
b
o
r
a
 
|
 
9
9
.
0
%
 
|
 
<
8
0
0
m
s
 
(
d
o
c
u
m
e
n
t
 
l
o
a
d
)
 
|
 
<
1
.
0
%
 
|


|
 
X
W
i
k
i
 
|
 
9
9
.
0
%
 
|
 
<
5
0
0
m
s
 
(
p
a
g
e
 
l
o
a
d
)
 
|
 
<
1
.
0
%
 
|




#
#
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
I
n
d
i
c
a
t
o
r
s
 
(
S
L
I
s
)




S
L
I
s
 
a
r
e
 
t
h
e
 
m
e
t
r
i
c
s
 
u
s
e
d
 
t
o
 
m
e
a
s
u
r
e
 
S
L
O
 
c
o
m
p
l
i
a
n
c
e
 
a
c
r
o
s
s
 
t
h
e
 
p
l
a
t
f
o
r
m
.




#
#
#
 
S
h
a
r
e
d
 
S
L
I
s




|
 
S
L
I
 
|
 
M
e
t
r
i
c
 
|
 
T
a
r
g
e
t
 
|
 
M
o
n
i
t
o
r
i
n
g
 
|


|
-
-
-
-
-
|
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
*
*
A
v
a
i
l
a
b
i
l
i
t
y
*
*
 
|
 
U
p
t
i
m
e
 
%
 
o
v
e
r
 
3
0
 
d
a
y
s
 
|
 
9
9
.
5
%
+
 
(
C
r
i
t
i
c
a
l
)
,
 
9
9
.
0
%
+
 
(
S
t
a
n
d
a
r
d
)
 
|
 
P
r
o
m
e
t
h
e
u
s
 
u
p
t
i
m
e
 
|


|
 
*
*
L
a
t
e
n
c
y
*
*
 
|
 
R
e
q
u
e
s
t
 
d
u
r
a
t
i
o
n
 
(
P
9
5
)
 
|
 
<
5
0
0
m
s
 
(
C
r
i
t
i
c
a
l
)
,
 
<
1
s
 
(
S
t
a
n
d
a
r
d
)
 
|
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
 
h
i
s
t
o
g
r
a
m
s
 
|


|
 
*
*
E
r
r
o
r
 
R
a
t
e
*
*
 
|
 
H
T
T
P
 
5
x
x
 
%
 
o
v
e
r
 
2
4
h
 
|
 
<
0
.
5
%
 
(
C
r
i
t
i
c
a
l
)
,
 
<
1
.
0
%
 
(
S
t
a
n
d
a
r
d
)
 
|
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
 
e
r
r
o
r
 
c
o
u
n
t
s
 
|


|
 
*
*
D
a
t
a
b
a
s
e
 
R
e
s
p
o
n
s
e
*
*
 
|
 
Q
u
e
r
y
 
d
u
r
a
t
i
o
n
 
(
P
9
5
)
 
|
 
<
1
0
0
m
s
 
|
 
D
a
t
a
b
a
s
e
 
e
x
p
o
r
t
e
r
 
|


|
 
*
*
C
a
c
h
e
 
H
i
t
 
R
a
t
e
*
*
 
|
 
R
e
d
i
s
 
c
a
c
h
e
 
h
i
t
 
%
 
|
 
>
8
0
%
 
|
 
R
e
d
i
s
 
e
x
p
o
r
t
e
r
 
|


|
 
*
*
D
i
s
k
 
U
s
a
g
e
*
*
 
|
 
P
V
C
 
u
s
a
g
e
 
%
 
|
 
<
8
0
%
 
|
 
N
o
d
e
 
E
x
p
o
r
t
e
r
 
+
 
P
r
o
m
e
t
h
e
u
s
 
R
u
l
e
s
 
|




#
#
#
 
S
e
r
v
i
c
e
-
S
p
e
c
i
f
i
c
 
S
L
I
s




|
 
S
e
r
v
i
c
e
 
|
 
K
e
y
 
M
e
t
r
i
c
s
 
|
 
T
a
r
g
e
t
 
|
 
A
l
e
r
t
 
T
h
r
e
s
h
o
l
d
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
T
o
k
e
n
 
i
s
s
u
a
n
c
e
 
l
a
t
e
n
c
y
 
(
P
9
5
)
 
|
 
<
1
0
0
m
s
 
|
 
>
2
0
0
m
s
:
 
W
a
r
n
i
n
g
 
|


|
 
P
o
s
t
g
r
e
S
Q
L
 
|
 
Q
u
e
r
y
 
l
a
t
e
n
c
y
 
(
P
9
5
)
 
|
 
<
5
0
m
s
 
|
 
>
1
0
0
m
s
:
 
W
a
r
n
i
n
g
 
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
F
i
l
e
 
u
p
l
o
a
d
 
l
a
t
e
n
c
y
 
(
a
v
e
r
a
g
e
)
 
|
 
<
2
s
 
(
1
0
0
M
B
 
f
i
l
e
s
)
 
|
 
>
5
s
:
 
W
a
r
n
i
n
g
 
|


|
 
C
o
l
l
a
b
o
r
a
 
|
 
D
o
c
u
m
e
n
t
 
c
o
n
v
e
r
s
i
o
n
 
t
i
m
e
 
|
 
<
3
0
s
 
(
1
0
-
p
a
g
e
 
d
o
c
)
 
|
 
>
6
0
s
:
 
W
a
r
n
i
n
g
 
|


|
 
J
i
t
s
i
 
|
 
R
o
o
m
 
j
o
i
n
 
l
a
t
e
n
c
y
 
|
 
<
1
0
0
0
m
s
 
|
 
>
2
0
0
0
m
s
:
 
W
a
r
n
i
n
g
 
|


|
 
E
l
e
m
e
n
t
 
|
 
S
y
n
c
 
l
a
t
e
n
c
y
 
(
m
e
s
s
a
g
e
 
→
 
c
l
i
e
n
t
)
 
|
 
<
5
0
0
m
s
 
|
 
>
1
s
:
 
W
a
r
n
i
n
g
 
|




#
#
 
P
e
r
f
o
r
m
a
n
c
e
 
B
a
s
e
l
i
n
e
s




#
#
#
 
R
e
s
o
u
r
c
e
 
U
t
i
l
i
z
a
t
i
o
n




|
 
C
o
m
p
o
n
e
n
t
 
|
 
C
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
|


|
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
2
 
c
o
r
e
s
 
|
 
4
 
c
o
r
e
s
 
|
 
2
G
i
 
|
 
4
G
i
 
|


|
 
P
o
s
t
g
r
e
S
Q
L
 
|
 
2
 
c
o
r
e
s
 
|
 
4
 
c
o
r
e
s
 
|
 
4
G
i
 
|
 
8
G
i
 
|


|
 
M
a
r
i
a
D
B
 
|
 
2
 
c
o
r
e
s
 
|
 
4
 
c
o
r
e
s
 
|
 
4
G
i
 
|
 
8
G
i
 
|


|
 
R
e
d
i
s
 
|
 
5
0
0
m
 
|
 
1
 
c
o
r
e
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
2
 
c
o
r
e
s
 
|
 
6
 
c
o
r
e
s
 
|
 
2
G
i
 
|
 
6
G
i
 
|


|
 
O
p
e
n
C
l
o
u
d
 
|
 
1
 
c
o
r
e
 
|
 
4
 
c
o
r
e
s
 
|
 
1
G
i
 
|
 
4
G
i
 
|




#
#
#
 
B
a
s
e
l
i
n
e
 
T
h
r
o
u
g
h
p
u
t




|
 
S
e
r
v
i
c
e
 
|
 
B
a
s
e
l
i
n
e
 
U
s
e
r
s
 
|
 
C
o
n
c
u
r
r
e
n
t
 
R
e
q
u
e
s
t
s
 
|
 
T
a
r
g
e
t
 
R
P
S
 
(
R
e
q
u
e
s
t
s
 
P
e
r
 
S
e
c
o
n
d
)
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
O
I
D
C
 
|
 
5
k
 
|
 
1
0
0
 
|
 
5
0
 
R
P
S
 
|


|
 
N
e
x
t
c
l
o
u
d
 
W
e
b
D
A
V
 
|
 
5
k
 
|
 
5
0
 
|
 
2
5
 
R
P
S
 
|


|
 
C
o
l
l
a
b
o
r
a
 
W
O
P
I
 
|
 
5
k
 
|
 
3
0
 
|
 
1
5
 
R
P
S
 
|


|
 
E
l
e
m
e
n
t
 
S
y
n
c
 
|
 
5
k
 
|
 
2
0
 
|
 
1
0
 
R
P
S
 
|


|
 
I
L
I
A
S
/
M
o
o
d
l
e
 
|
 
5
k
 
|
 
4
0
 
|
 
2
0
 
R
P
S
 
|




#
#
 
P
e
a
k
 
C
a
p
a
c
i
t
y
 
P
l
a
n
n
i
n
g




#
#
#
 
S
e
m
e
s
t
e
r
 
P
e
a
k
 
R
e
q
u
i
r
e
m
e
n
t
s




|
 
C
o
m
p
o
n
e
n
t
 
|
 
P
e
a
k
 
C
P
U
 
|
 
P
e
a
k
 
M
e
m
o
r
y
 
|
 
P
e
a
k
 
R
e
q
u
e
s
t
s
 
|


|
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
6
 
c
o
r
e
s
 
|
 
8
G
i
 
|
 
1
5
0
 
R
P
S
 
(
w
e
e
k
 
1
 
o
f
 
s
e
m
e
s
t
e
r
)
 
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
1
0
 
c
o
r
e
s
 
|
 
1
0
G
i
 
|
 
1
0
0
 
R
P
S
 
(
f
i
l
e
 
u
p
l
o
a
d
s
)
 
|


|
 
I
L
I
A
S
 
|
 
8
 
c
o
r
e
s
 
|
 
8
G
i
 
|
 
8
0
 
R
P
S
 
(
e
x
a
m
 
a
c
c
e
s
s
)
 
|


|
 
M
o
o
d
l
e
 
|
 
8
 
c
o
r
e
s
 
|
 
8
G
i
 
|
 
6
0
 
R
P
S
 
(
q
u
i
z
 
s
u
b
m
i
s
s
i
o
n
s
)
 
|


|
 
C
o
l
l
a
b
o
r
a
 
|
 
4
 
c
o
r
e
s
 
|
 
6
G
i
 
|
 
5
0
 
R
P
S
 
(
d
o
c
 
v
i
e
w
i
n
g
)
 
|




#
#
#
 
E
m
e
r
g
e
n
c
y
 
O
v
e
r
p
r
o
v
i
s
i
o
n
i
n
g




F
o
r
 
s
e
m
e
s
t
e
r
 
p
e
a
k
,
 
f
o
l
l
o
w
i
n
g
 
c
o
m
p
o
n
e
n
t
s
 
S
H
A
L
L
 
b
e
 
a
u
t
o
-
s
c
a
l
e
d
 
(
H
P
A
)
:


-
 
*
*
N
e
x
t
c
l
o
u
d
 
w
e
b
*
*
:
 
1
 
→
 
3
 
r
e
p
l
i
c
a
s


-
 
*
*
C
o
l
l
a
b
o
r
a
*
*
:
 
1
 
→
 
2
 
r
e
p
l
i
c
a
s


-
 
*
*
E
l
e
m
e
n
t
 
S
y
n
c
*
*
:
 
2
 
→
 
4
 
r
e
p
l
i
c
a
s




N
o
t
e
:
 
K
e
y
c
l
o
a
k
,
 
P
o
s
t
g
r
e
S
Q
L
,
 
M
a
r
i
a
D
B
 
a
r
e
 
S
t
a
t
e
f
u
l
S
e
t
s
 
a
n
d
 
C
A
N
N
O
T
 
b
e
 
a
u
t
o
-


s
c
a
l
e
d
.
 
U
s
e
 
m
a
n
u
a
l
 
r
e
p
l
i
c
a
 
c
o
u
n
t
 
i
n
c
r
e
a
s
e
 
i
n
 
`
r
e
p
l
i
c
a
s
.
y
a
m
l
.
g
o
t
m
p
l
`
.




#
#
 
A
l
e
r
t
i
n
g
 
T
h
r
e
s
h
o
l
d
s




|
 
M
e
t
r
i
c
 
|
 
W
a
r
n
i
n
g
 
T
h
r
e
s
h
o
l
d
 
|
 
C
r
i
t
i
c
a
l
 
T
h
r
e
s
h
o
l
d
 
|
 
A
l
e
r
t
 
N
o
t
i
f
i
c
a
t
i
o
n
 
|


|
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
E
r
r
o
r
 
R
a
t
e
 
|
 
>
0
.
5
%
 
(
5
x
x
)
 
|
 
>
1
.
0
%
 
(
5
x
x
)
 
|
 
P
a
g
e
r
D
u
t
y
 
(
C
r
i
t
i
c
a
l
)
 
|


|
 
P
o
s
t
g
r
e
S
Q
L
 
C
P
U
 
U
s
a
g
e
 
|
 
>
7
0
%
 
|
 
>
9
0
%
 
|
 
E
m
a
i
l
 
(
W
a
r
n
i
n
g
)
 
+
 
T
e
a
m
s
 
c
h
a
n
n
e
l
 
|


|
 
M
a
r
i
a
D
B
 
C
P
U
 
U
s
a
g
e
 
|
 
>
7
0
%
 
|
 
>
9
0
%
 
|
 
E
m
a
i
l
 
(
W
a
r
n
i
n
g
)
 
+
 
T
e
a
m
s
 
c
h
a
n
n
e
l
 
|


|
 
K
u
b
e
r
n
e
t
e
s
 
D
i
s
k
 
U
s
a
g
e
 
|
 
>
8
0
%
 
(
P
V
C
)
 
|
 
>
9
5
%
 
(
P
V
C
)
 
|
 
E
m
a
i
l
 
+
 
T
e
a
m
s
 
c
h
a
n
n
e
l
 
|


|
 
N
e
x
t
c
l
o
u
d
 
F
i
l
e
 
U
p
l
o
a
d
 
L
a
t
e
n
c
y
 
|
 
>
5
s
 
(
P
9
5
)
 
|
 
>
1
0
s
 
(
P
9
5
)
 
|
 
E
m
a
i
l
 
(
W
a
r
n
i
n
g
)
 
|


|
 
R
e
d
i
s
 
C
a
c
h
e
 
H
i
t
 
R
a
t
e
 
|
 
<
7
0
%
 
|
 
<
6
0
%
 
|
 
E
m
a
i
l
 
(
W
a
r
n
i
n
g
)
 
|




#
#
 
D
e
p
e
n
d
s
 
O
n




M
o
n
i
t
o
r
i
n
g
 
p
l
a
t
f
o
r
m
 
(
P
r
o
m
e
t
h
e
u
s
 
+
 
G
r
a
f
a
n
a
 
+
 
A
l
e
r
t
m
a
n
a
g
e
r
)
,
 
H
P
A
 
(
a
u
t
o
-
s
c
a
l
i
n
g
)




#
#
 
I
n
t
e
g
r
a
t
e
s
 
W
i
t
h




[
R
e
s
o
u
r
c
e
 
S
i
z
i
n
g
]
(
.
/
r
e
s
o
u
r
c
e
-
s
i
z
i
n
g
/
)
,
 
[
M
o
n
i
t
o
r
i
n
g
]
(
.
/
m
o
n
i
t
o
r
i
n
g
/
)
,
 
[
C
a
p
a
c
i
t
y
 
P
l
a
n
n
i
n
g
]
(
.
/
c
a
p
a
c
i
t
y
-
p
l
a
n
n
i
n
g
/
)

