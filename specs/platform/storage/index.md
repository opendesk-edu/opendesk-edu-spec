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
 
S
t
o
r
a
g
e




#
#
 
P
u
r
p
o
s
e




V
o
l
u
m
e
 
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
 
v
i
a
 
C
e
p
h
 
C
S
I
 
o
p
e
r
a
t
o
r
s
 
f
o
r
 
d
a
t
a
b
a
s
e
 
w
o
r
k
l
o
a
d
s
 
(
R
W
O
)
 
a
n
d


s
h
a
r
e
d
 
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
 
(
R
W
X
)
,
 
w
i
t
h
 
R
W
O
 
b
a
c
k
u
p
 
e
x
c
l
u
s
i
o
n
 
p
a
t
t
e
r
n
s
 
a
n
d
 
u
n
i
t
-
b
a
s
e
d


s
i
z
i
n
g
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
 
O
b
j
e
c
t
 
s
t
o
r
a
g
e
 
c
o
n
f
i
g
u
r
a
t
i
o
n
 
(
M
i
n
I
O
/
S
3
,
 
p
e
r
-
s
e
r
v
i
c
e
 
i
n
 
s
e
r
v
i
c
e
 
s
p
e
c
s
)


-
 
B
a
c
k
u
p
 
s
t
r
a
t
e
g
y
 
(
s
e
e
 
`
.
.
/
b
a
c
k
u
p
`
)




#
#
 
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




#
#
#
 
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
:
 
R
W
O
 
v
o
l
u
m
e
 
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
 
f
o
r
 
d
a
t
a
b
a
s
e
s




D
a
t
a
b
a
s
e
 
a
n
d
 
s
t
a
t
e
f
u
l
 
a
p
p
l
i
c
a
t
i
o
n
 
w
o
r
k
l
o
a
d
s
 
S
H
A
L
L
 
u
s
e
 
R
e
a
d
W
r
i
t
e
O
n
c
e
 
v
o
l
u
m
e
s


p
r
o
v
i
s
i
o
n
e
d
 
f
r
o
m
 
t
h
e
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
s
t
o
r
a
g
e
 
c
l
a
s
s
.




R
W
O
 
P
V
C
s
 
S
H
A
L
L
 
b
e
 
a
n
n
o
t
a
t
e
d
 
w
i
t
h
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
t
o
 
p
r
e
v
e
n
t
 
b
a
c
k
u
p


p
o
d
s
 
f
r
o
m
 
h
a
n
g
i
n
g
 
w
h
e
n
 
t
h
e
y
 
c
a
n
n
o
t
 
m
o
u
n
t
 
m
u
l
t
i
p
l
e
 
R
W
O
 
P
V
C
s
 
b
o
u
n
d
 
t
o
 
d
i
f
f
e
r
e
n
t


n
o
d
e
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
D
a
t
a
b
a
s
e
 
P
V
C
 
p
r
o
v
i
s
i
o
n
e
d
 
f
r
o
m
 
R
B
D


-
 
G
I
V
E
N
 
a
 
d
a
t
a
b
a
s
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
 
(
e
.
g
.
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
)
 
r
e
q
u
e
s
t
i
n
g
 
a
 
p
e
r
s
i
s
t
e
n
t
 
v
o
l
u
m
e


-
 
W
H
E
N
 
t
h
e
 
P
V
C
 
i
s
 
c
r
e
a
t
e
d
 
w
i
t
h
 
`
s
t
o
r
a
g
e
C
l
a
s
s
N
a
m
e
:
 
c
e
p
h
-
r
b
d
-
s
s
d
`


-
 
T
H
E
N
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
p
r
o
v
i
s
i
o
n
e
d
 
a
s
 
a
 
C
e
p
h
 
R
B
D
 
i
m
a
g
e
 
o
n
 
S
S
D
 
s
t
o
r
a
g
e


-
 
A
N
D
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
b
o
u
n
d
 
t
o
 
a
 
s
i
n
g
l
e
 
n
o
d
e
 
(
R
e
a
d
W
r
i
t
e
O
n
c
e
)


-
 
A
N
D
 
t
h
e
 
P
V
C
 
h
a
s
 
a
n
n
o
t
a
t
i
o
n
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
R
W
O
 
b
a
c
k
u
p
 
e
x
c
l
u
d
e
d


-
 
G
I
V
E
N
 
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
b
a
c
k
i
n
g
 
u
p
 
a
l
l
 
P
V
C
s


-
 
W
H
E
N
 
t
h
e
 
b
a
c
k
u
p
 
j
o
b
 
e
n
c
o
u
n
t
e
r
s
 
a
n
 
R
W
O
 
P
V
C


-
 
T
H
E
N
 
t
h
e
 
P
V
C
 
i
s
 
s
k
i
p
p
e
d
 
d
u
e
 
t
o
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
a
n
n
o
t
a
t
i
o
n


-
 
A
N
D
 
t
h
e
 
b
a
c
k
u
p
 
j
o
b
 
d
o
e
s
 
n
o
t
 
h
a
n
g
 
a
t
t
e
m
p
t
i
n
g
 
t
o
 
m
o
u
n
t
 
m
u
l
t
i
p
l
e
 
R
W
O
 
P
V
C
s




#
#
#
 
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
:
 
R
W
X
 
v
o
l
u
m
e
 
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
 
f
o
r
 
s
h
a
r
e
d
 
s
t
o
r
a
g
e




S
h
a
r
e
d
 
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
 
w
o
r
k
l
o
a
d
s
 
S
H
A
L
L
 
u
s
e
 
R
e
a
d
W
r
i
t
e
M
a
n
y
 
v
o
l
u
m
e
s
 
p
r
o
v
i
s
i
o
n
e
d


f
r
o
m
 
t
h
e
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
s
t
o
r
a
g
e
 
c
l
a
s
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
h
a
r
e
d
 
s
t
o
r
a
g
e
 
P
V
C
 
p
r
o
v
i
s
i
o
n
e
d
 
f
r
o
m
 
C
e
p
h
F
S


-
 
G
I
V
E
N
 
a
 
d
e
p
l
o
y
m
e
n
t
 
r
e
q
u
i
r
i
n
g
 
s
h
a
r
e
d
 
f
i
l
e
 
a
c
c
e
s
s
 
(
e
.
g
.
,
 
N
e
x
t
c
l
o
u
d
)


-
 
W
H
E
N
 
t
h
e
 
P
V
C
 
i
s
 
c
r
e
a
t
e
d
 
w
i
t
h
 
`
s
t
o
r
a
g
e
C
l
a
s
s
N
a
m
e
:
 
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`


-
 
T
H
E
N
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
p
r
o
v
i
s
i
o
n
e
d
 
a
s
 
a
 
C
e
p
h
F
S
 
s
u
b
d
i
r
e
c
t
o
r
y
 
o
n
 
t
h
e
 
e
r
a
s
u
r
e
-
c
o
d
e
d
 
p
o
o
l


-
 
A
N
D
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
a
c
c
e
s
s
i
b
l
e
 
f
r
o
m
 
m
u
l
t
i
p
l
e
 
n
o
d
e
s
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
 
(
R
e
a
d
W
r
i
t
e
M
a
n
y
)


-
 
A
N
D
 
t
h
e
 
v
o
l
u
m
e
 
u
s
e
s
 
H
D
D
 
e
r
a
s
u
r
e
-
c
o
d
e
d
 
s
t
o
r
a
g
e
 
(
3
+
2
 
d
e
f
a
u
l
t
)




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
t
i
c
k
y
 
b
i
t
 
s
u
p
p
o
r
t
 
f
o
r
 
O
p
e
n
P
r
o
j
e
c
t


-
 
G
I
V
E
N
 
t
h
e
 
O
p
e
n
P
r
o
j
e
c
t
 
s
e
e
d
e
r
 
j
o
b
 
c
r
e
a
t
i
n
g
 
f
i
l
e
s
 
w
i
t
h
 
s
e
t
g
i
d
 
i
n
 
a
 
C
e
p
h
F
S
 
P
V
C


-
 
W
H
E
N
 
t
h
e
 
j
o
b
 
w
r
i
t
e
s
 
t
o
 
t
h
e
 
P
V
C


-
 
T
H
E
N
 
t
h
e
 
s
t
i
c
k
y
 
b
i
t
 
i
s
 
p
r
e
s
e
r
v
e
d


-
 
A
N
D
 
g
r
o
u
p
-
o
w
n
e
d
 
f
i
l
e
s
 
i
n
h
e
r
i
t
 
t
h
e
 
p
a
r
e
n
t
 
d
i
r
e
c
t
o
r
y
'
s
 
g
r
o
u
p


-
 
A
N
D
 
t
h
e
 
O
p
e
n
P
r
o
j
e
c
t
 
s
e
e
d
e
r
 
j
o
b
 
c
o
m
p
l
e
t
e
s
 
s
u
c
c
e
s
s
f
u
l
l
y




#
#
#
 
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
:
 
V
o
l
u
m
e
 
s
i
z
i
n
g
 
u
n
i
t
s




S
t
o
r
a
g
e
 
r
e
q
u
e
s
t
s
 
S
H
A
L
L
 
u
s
e
 
s
t
a
n
d
a
r
d
 
C
e
p
h
 
C
S
I
 
u
n
i
t
s
:


-
 
D
a
t
a
b
a
s
e
 
P
V
C
s
:
 
m
u
l
t
i
p
l
e
s
 
o
f
 
1
T
i
 
(
e
.
g
.
,
 
`
1
T
i
`
,
 
`
2
T
i
`
)


-
 
F
i
l
e
 
s
h
a
r
i
n
g
 
P
V
C
s
:
 
m
u
l
t
i
p
l
e
s
 
o
f
 
1
0
0
G
i
 
(
e
.
g
.
,
 
`
5
0
0
G
i
`
,
 
`
1
0
0
0
G
i
`
)


-
 
M
i
n
i
m
a
l
 
P
V
C
s
:
 
m
i
n
i
m
u
m
 
1
0
G
i
 
t
o
 
p
r
e
v
e
n
t
 
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
 
e
r
r
o
r
s




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
D
a
t
a
b
a
s
e
 
P
V
C
 
s
i
z
e
d
 
c
o
r
r
e
c
t
l
y


-
 
G
I
V
E
N
 
a
 
M
a
r
i
a
D
B
 
P
V
C
 
r
e
q
u
e
s
t
i
n
g
 
s
t
o
r
a
g
e


-
 
W
H
E
N
 
t
h
e
 
P
V
C
 
s
p
e
c
i
f
i
e
s
 
`
s
i
z
e
:
 
"
1
0
G
i
"
`


-
 
T
H
E
N
 
t
h
e
 
C
e
p
h
 
R
B
D
 
i
m
a
g
e
 
i
s
 
p
r
o
v
i
s
i
o
n
e
d
 
w
i
t
h
 
1
0
G
i
 
c
a
p
a
c
i
t
y


-
 
A
N
D
 
t
h
e
 
P
V
C
 
b
o
u
n
d
 
c
a
p
a
c
i
t
y
 
e
x
a
c
t
l
y
 
m
a
t
c
h
e
s
 
t
h
e
 
r
e
q
u
e
s
t




#
#
#
 
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
:
 
S
t
o
r
a
g
e
 
c
l
a
s
s
 
q
u
a
l
i
t
y
 
o
f
 
s
e
r
v
i
c
e




-
 
*
*
`
c
e
p
h
-
r
b
d
-
s
s
d
`
*
*
:
 
H
i
g
h
 
I
O
P
S
,
 
l
o
w
 
l
a
t
e
n
c
y
,
 
S
S
D
-
b
a
c
k
e
d
,
 
f
o
r
 
d
a
t
a
b
a
s
e
s


-
 
*
*
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
*
*
:
 
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
-
o
r
i
e
n
t
e
d
,
 
e
r
a
s
u
r
e
-
c
o
d
e
d
 
(
3
+
2
)
,
 
f
o
r
 
s
h
a
r
e
d
 
f
i
l
e
s




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
A
p
p
r
o
p
r
i
a
t
e
 
s
t
o
r
a
g
e
 
c
l
a
s
s
 
s
e
l
e
c
t
i
o
n


-
 
G
I
V
E
N
 
a
 
d
a
t
a
b
a
s
e
 
w
o
r
k
l
o
a
d
 
(
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
)


-
 
W
H
E
N
 
a
 
P
V
C
 
i
s
 
r
e
q
u
e
s
t
e
d


-
 
T
H
E
N
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
S
H
A
L
L
 
b
e
 
u
s
e
d
 
(
n
o
t
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
)


-
 
A
N
D
 
t
h
e
 
P
V
C
 
a
n
n
o
t
a
t
i
o
n
s
 
s
p
e
c
i
f
y
 
I
O
P
S
 
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
 
i
f
 
n
e
e
d
e
d




#
#
 
S
t
o
r
a
g
e
 
C
l
a
s
s
e
s




|
 
C
l
a
s
s
 
|
 
A
c
c
e
s
s
 
M
o
d
e
 
|
 
B
a
c
k
e
n
d
 
|
 
U
s
e
 
C
a
s
e
 
|
 
E
x
c
l
u
d
e
d
 
F
r
o
m
 
B
a
c
k
u
p
 
|


|
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
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
|
 
R
W
O
 
|
 
C
e
p
h
 
R
B
D
 
o
n
 
S
S
D
 
|
 
D
a
t
a
b
a
s
e
s
,
 
s
t
a
t
e
f
u
l
 
a
p
p
s
 
(
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
,
 
R
e
d
i
s
)
 
|
 
Y
e
s
 
(
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
)
 
|


|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
|
 
R
W
X
 
|
 
C
e
p
h
F
S
 
o
n
 
H
D
D
 
(
3
+
2
)
 
|
 
S
h
a
r
e
d
 
f
i
l
e
s
,
 
r
e
c
o
r
d
i
n
g
s
,
a
t
t
a
c
h
m
e
n
t
s
 
(
N
e
x
t
c
l
o
u
d
,
 
O
p
e
n
C
l
o
u
d
,
 
B
B
B
,
 
M
o
o
d
l
e
)
 
|
 
N
o
 
(
i
n
c
l
u
d
e
d
 
i
n
 
m
a
i
n
 
b
a
c
k
u
p
)
 
|




#
#
 
R
W
O
 
P
V
C
 
E
x
c
l
u
s
i
o
n
 
R
a
t
i
o
n
a
l
e




A
l
l
 
2
9
 
R
W
O
 
P
V
C
s
 
a
r
e
 
e
x
c
l
u
d
e
d
 
f
r
o
m
 
t
h
e
 
m
a
i
n
 
k
8
u
p
 
b
a
c
k
u
p
 
s
c
h
e
d
u
l
e
 
b
e
c
a
u
s
e
:




1
.
 
*
*
M
u
l
t
i
-
n
o
d
e
 
m
o
u
n
t
i
n
g
*
*
:
 
A
 
s
i
n
g
l
e
 
b
a
c
k
u
p
 
p
o
d
 
c
a
n
n
o
t
 
m
o
u
n
t
 
R
W
O
 
P
V
C
s
 
b
o
u
n
d
 
t
o
 
d
i
f
f
e
r
e
n
t
 
n
o
d
e
s


2
.
 
*
*
S
t
u
c
k
 
j
o
b
s
*
*
:
 
A
t
t
e
m
p
t
i
n
g
 
t
h
i
s
 
c
a
u
s
e
s
 
t
h
e
 
b
a
c
k
u
p
 
j
o
b
 
t
o
 
h
a
n
g
 
i
n
 
`
C
o
n
t
a
i
n
e
r
C
r
e
a
t
i
n
g
`


3
.
 
*
*
A
l
t
e
r
n
a
t
i
v
e
 
b
a
c
k
u
p
*
*
:
 
D
a
t
a
b
a
s
e
 
b
a
c
k
u
p
s
 
a
r
e
 
h
a
n
d
l
e
d
 
v
i
a
 
n
a
t
i
v
e
 
t
o
o
l
s
 
(
`
p
g
_
d
u
m
p
`
,
 
`
m
y
s
q
l
d
u
m
p
`
)
 
s
c
h
e
d
u
l
e
d
 
s
e
p
a
r
a
t
e
l
y




#
#
#
 
E
x
c
l
u
d
e
d
 
R
W
O
 
P
V
C
s
 
(
2
9
 
t
o
t
a
l
)




|
 
S
e
r
v
i
c
e
 
|
 
P
V
C
 
N
a
m
e
 
|
 
A
l
t
e
r
n
a
t
i
v
e
 
B
a
c
k
u
p
 
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
 
`
d
a
t
a
-
k
e
y
c
l
o
a
k
-
0
`
 
|
 
S
Q
L
 
d
u
m
p
 
v
i
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
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
 
`
d
a
t
a
-
p
o
s
t
g
r
e
s
q
l
-
0
`
 
|
 
`
p
g
_
d
u
m
p
`
 
v
i
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
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
 
`
d
a
t
a
-
m
a
r
i
a
d
b
-
0
`
 
|
 
`
m
y
s
q
l
d
u
m
p
`
 
v
i
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
|


|
 
R
e
d
i
s
 
|
 
`
d
a
t
a
-
r
e
d
i
s
-
0
`
 
|
 
R
e
d
i
s
 
R
D
B
 
s
n
a
p
s
h
o
t
 
v
i
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
|


|
 
O
p
e
n
L
D
A
P
 
|
 
`
d
a
t
a
-
l
d
a
p
-
0
`
 
|
 
S
l
a
p
c
a
t
 
d
u
m
p
 
v
i
a
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
|


|
 
.
.
.
 
(
o
t
h
e
r
 
s
t
a
t
e
f
u
l
 
s
e
r
v
i
c
e
s
)
 
|
 
.
.
.
 
|
 
.
.
.
 
|




#
#
 
H
R
Z
 
S
t
o
r
a
g
e
 
C
o
n
t
e
x
t




#
#
#
 
C
e
p
h
 
C
l
u
s
t
e
r
 
D
e
t
a
i
l
s




|
 
P
r
o
p
e
r
t
y
 
|
 
V
a
l
u
e
 
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
|
-
-
-
-
-
-
-
|


|
 
S
t
o
r
a
g
e
 
S
y
s
t
e
m
 
|
 
C
e
p
h
 
(
v
i
a
 
C
S
I
)
 
|


|
 
C
S
I
 
D
r
i
v
e
r
s
 
|
 
`
r
b
d
.
c
s
i
.
c
e
p
h
.
c
o
m
`
 
(
R
B
D
)
,
 
`
c
e
p
h
f
s
.
c
s
i
.
c
e
p
h
.
c
o
m
`
 
(
C
e
p
h
F
S
)
 
|


|
 
S
S
D
 
P
o
o
l
 
|
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
(
f
o
r
 
R
B
D
)
 
|


|
 
H
D
D
 
P
o
o
l
 
|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
(
e
r
a
s
u
r
e
-
c
o
d
e
d
 
3
+
2
)
 
|


|
 
N
a
m
e
s
p
a
c
e
s
 
|
 
S
e
p
a
r
a
t
e
 
C
e
p
h
F
S
 
n
a
m
e
s
p
a
c
e
s
 
p
e
r
 
P
V
C
 
|




#
#
#
 
S
t
o
r
a
g
e
 
S
i
z
i
n
g
 
B
a
s
e
l
i
n
e
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
 
P
V
C
 
|
 
S
i
z
e
 
|
 
T
y
p
e
 
|
 
B
a
c
k
u
p
 
S
t
r
a
t
e
g
y
 
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
 
`
d
a
t
a
-
k
e
y
c
l
o
a
k
-
0
`
 
|
 
1
0
G
i
 
|
 
R
W
O
 
|
 
S
Q
L
 
d
u
m
p
 
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
 
`
d
a
t
a
-
p
o
s
t
g
r
e
s
q
l
-
0
`
 
|
 
1
0
G
i
 
|
 
R
W
O
 
|
 
`
p
g
_
d
u
m
p
`
 
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
 
`
d
a
t
a
-
m
a
r
i
a
d
b
-
0
`
 
|
 
1
0
G
i
 
|
 
R
W
O
 
|
 
`
m
y
s
q
l
d
u
m
p
`
 
|


|
 
R
e
d
i
s
 
|
 
`
d
a
t
a
-
r
e
d
i
s
-
0
`
 
|
 
1
G
i
 
|
 
R
W
O
 
|
 
R
D
B
 
s
n
a
p
s
h
o
t
 
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
 
`
n
e
x
t
c
l
o
u
d
-
d
a
t
a
`
 
|
 
5
0
0
G
i
 
|
 
R
W
X
 
|
 
k
8
u
p
 
(
m
a
i
n
 
s
c
h
e
d
u
l
e
)
 
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
 
`
o
p
e
n
d
e
s
k
-
o
p
e
n
c
l
o
u
d
-
d
a
t
a
`
 
|
 
5
0
0
G
i
 
|
 
R
W
X
 
|
 
k
8
u
p
 
(
m
a
i
n
 
s
c
h
e
d
u
l
e
)
 
|


|
 
I
L
I
A
S
 
|
 
`
i
l
i
a
s
-
d
a
t
a
`
 
|
 
5
0
0
G
i
 
|
 
R
W
X
 
(
S
3
)
 
|
 
k
8
u
p
 
(
m
a
i
n
 
s
c
h
e
d
u
l
e
)
 
|


|
 
B
B
B
 
|
 
`
b
b
b
-
r
e
c
o
r
d
i
n
g
s
`
 
|
 
5
0
0
G
i
 
|
 
R
W
X
 
|
 
k
8
u
p
 
(
m
a
i
n
 
s
c
h
e
d
u
l
e
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
 
`
m
o
o
d
l
e
-
d
a
t
a
`
 
|
 
5
0
0
G
i
 
|
 
R
W
X
 
|
 
k
8
u
p
 
(
m
a
i
n
 
s
c
h
e
d
u
l
e
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




-
 
C
e
p
h
 
C
S
I
 
d
r
i
v
e
r
s
 
(
`
r
b
d
.
c
s
i
.
c
e
p
h
.
c
o
m
`
,
 
`
c
e
p
h
f
s
.
c
s
i
.
c
e
p
h
.
c
o
m
`
)


-
 
k
8
u
p
 
b
a
c
k
u
p
 
o
p
e
r
a
t
o
r
 
(
m
a
i
n
 
b
a
c
k
u
p
 
s
c
h
e
d
u
l
e
)


-
 
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
/
M
a
r
i
a
D
B
/
R
e
d
i
s
 
(
n
a
t
i
v
e
 
b
a
c
k
u
p
 
j
o
b
s
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




-
 
[
B
a
c
k
u
p
]
(
.
/
b
a
c
k
u
p
/
)
 
(
b
a
c
k
u
p
 
s
c
h
e
d
u
l
e
s
,
 
R
W
O
 
e
x
c
l
u
s
i
o
n
)


-
 
[
D
i
s
a
s
t
e
r
 
R
e
c
o
v
e
r
y
]
(
.
/
d
i
s
a
s
t
e
r
-
r
e
c
o
v
e
r
y
/
)
 
(
R
W
O
 
r
e
c
o
v
e
r
y
 
p
r
o
c
e
d
u
r
e
s
)


-
 
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
 
(
s
t
o
r
a
g
e
 
p
e
r
-
s
e
r
v
i
c
e
)


-
 
`
.
.
/
_
r
e
g
i
s
t
r
y
/
i
n
d
e
x
.
m
d
`
 
(
S
h
a
r
e
d
 
S
t
o
r
a
g
e
 
t
a
b
l
e
)

