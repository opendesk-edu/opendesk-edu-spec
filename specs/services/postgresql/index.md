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
o
s
t
g
r
e
S
Q
L




#
#
 
P
u
r
p
o
s
e




S
h
a
r
e
d
 
r
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
s
e
r
v
i
c
e
 
f
o
r
 
t
h
e
 
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
 
p
l
a
t
f
o
r
m
.
 
P
r
o
v
i
d
e
s


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
 
d
a
t
a
b
a
s
e
 
i
n
s
t
a
n
c
e
s
 
f
o
r
 
K
e
y
c
l
o
a
k
 
(
I
A
M
)
,
 
E
l
e
m
e
n
t
 
(
M
a
t
r
i
x
)
,
 
N
o
t
e
s
,


P
l
a
n
k
a
,
 
S
O
G
o
,
 
X
W
i
k
i
,
 
D
o
v
e
c
o
t
,
 
a
n
d
 
o
t
h
e
r
 
O
I
D
C
-
a
u
t
h
e
n
t
i
c
a
t
e
d
 
s
e
r
v
i
c
e
s
.




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
 
r
u
n
s
 
a
s
 
a
 
s
i
n
g
l
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
 
w
i
t
h
 
R
W
O
 
P
V
C
 
o
n
 
C
e
p
h
 
R
B
D
 
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
,


b
a
c
k
e
d
 
u
p
 
v
i
a
 
n
a
t
i
v
e
 
`
p
g
_
d
u
m
p
`
 
(
n
o
t
 
k
8
u
p
 
—
 
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
.




#
#
 
S
c
o
p
e




-
 
✅
 
*
*
I
n
 
s
c
o
p
e
*
*
:
 
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
 
s
e
r
v
e
r
 
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
,
 
d
a
t
a
b
a
s
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
,
 
u
s
e
r
/
r
o
l
e
 
m
a
n
a
g
e
m
e
n
t
,
 
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
 
v
i
a
 
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
 
P
V
C
 
s
t
o
r
a
g
e
 
m
a
n
a
g
e
m
e
n
t
,
 
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
 
v
i
a
 
`
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
`


-
 
❌
 
*
*
O
u
t
 
o
f
 
s
c
o
p
e
*
*
:
 
M
a
r
i
a
D
B
 
(
s
e
e
 
`
.
.
/
m
a
r
i
a
d
b
/
`
)
,
 
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
-
s
p
e
c
i
f
i
c
 
s
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
s
,
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
i
n
g
 
(
P
g
B
o
u
n
c
e
r
)
,
 
r
e
p
l
i
c
a
t
i
o
n
/
H
A
 
c
l
u
s
t
e
r
i
n
g




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
 
M
a
r
i
a
D
B
 
(
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
 
s
e
r
v
e
r
,
 
s
e
e
 
`
.
.
/
m
a
r
i
a
d
b
/
`
)


-
 
P
g
B
o
u
n
c
e
r
 
o
r
 
o
t
h
e
r
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
e
r
s
 
(
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
-
m
a
n
a
g
e
d
 
p
o
o
l
i
n
g
)


-
 
S
t
r
e
a
m
i
n
g
 
r
e
p
l
i
c
a
t
i
o
n
 
/
 
P
a
t
r
o
n
i
 
H
A
 
(
s
i
n
g
l
e
-
n
o
d
e
 
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
)


-
 
S
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
s
 
(
e
a
c
h
 
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
 
m
a
n
a
g
e
s
 
i
t
s
 
o
w
n
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
 
S
i
n
g
l
e
 
s
h
a
r
e
d
 
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
 
i
n
s
t
a
n
c
e




T
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
 
S
H
A
L
L
 
d
e
p
l
o
y
 
a
 
s
i
n
g
l
e
 
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
e
r
v
i
n
g
 
a
l
l


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
-
d
e
p
e
n
d
e
n
t
 
s
e
r
v
i
c
e
s
 
v
i
a
 
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
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
 
M
u
l
t
i
-
d
a
t
a
b
a
s
e
 
h
o
s
t
i
n
g


-
 
G
I
V
E
N
 
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
 
w
i
t
h
 
`
r
e
p
l
i
c
a
C
o
u
n
t
:
 
1
`


-
 
T
H
E
N
 
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
s
 
a
r
e
 
c
r
e
a
t
e
d
 
f
o
r
 
e
a
c
h
 
s
e
r
v
i
c
e
:


 
 
-
 
`
k
e
y
c
l
o
a
k
`
 
(
K
e
y
c
l
o
a
k
 
I
A
M
 
d
a
t
a
)


 
 
-
 
`
e
l
e
m
e
n
t
`
 
(
M
a
t
r
i
x
 
S
y
n
a
p
s
e
 
h
o
m
e
s
e
r
v
e
r
)


 
 
-
 
`
n
o
t
e
s
`
 
(
N
o
t
e
s
 
f
i
l
e
 
m
e
t
a
d
a
t
a
)


 
 
-
 
`
p
l
a
n
k
a
`
 
(
P
l
a
n
k
a
 
p
r
o
j
e
c
t
 
b
o
a
r
d
)


 
 
-
 
`
s
o
g
o
`
 
(
S
O
G
o
 
g
r
o
u
p
w
a
r
e
)


 
 
-
 
`
x
w
i
k
i
`
 
(
X
W
i
k
i
 
w
i
k
i
 
c
o
n
t
e
n
t
)


 
 
-
 
`
d
o
v
e
c
o
t
`
 
(
D
o
v
e
c
o
t
 
I
M
A
P
 
m
a
i
l
 
s
t
o
r
e
)


-
 
A
N
D
 
e
a
c
h
 
d
a
t
a
b
a
s
e
 
h
a
s
 
a
 
d
e
d
i
c
a
t
e
d
 
u
s
e
r
 
w
i
t
h
 
l
e
a
s
t
-
p
r
i
v
i
l
e
g
e
 
a
c
c
e
s
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
 
S
t
o
r
a
g
e
 
o
n
 
C
e
p
h
 
R
B
D
 
S
S
D




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
 
S
H
A
L
L
 
u
s
e
 
a
 
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
 
f
o
r
 
o
p
t
i
m
a
l
 
d
a
t
a
b
a
s
e
 
I
/
O
 
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
i
n
g


-
 
G
I
V
E
N
 
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
 
(
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
 
N
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
 
v
i
a
 
p
g
_
d
u
m
p




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
 
b
a
c
k
e
d
 
u
p
 
v
i
a
 
n
a
t
i
v
e
 
`
p
g
_
d
u
m
p
`
 
w
i
t
h
i
n
 
t
h
e


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
 
p
o
d
 
(
n
o
t
 
v
i
a
 
k
8
u
p
 
R
W
O
 
m
o
u
n
t
,
 
w
h
i
c
h
 
w
o
u
l
d
 
f
a
i
l
 
o
n
 
m
u
l
t
i
-
n
o
d
e
)
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
i
l
y
 
p
g
_
d
u
m
p
 
t
o
 
S
3


-
 
G
I
V
E
N
 
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
 
P
o
d
 
w
i
t
h
 
R
W
O
 
P
V
C
 
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
 
r
u
n
s
 
o
n
 
t
h
e
 
s
a
m
e
 
n
o
d
e
 
a
s
 
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


-
 
T
H
E
N
 
`
p
g
_
d
u
m
p
 
-
-
a
l
l
`
 
i
s
 
e
x
e
c
u
t
e
d
 
i
n
s
i
d
e
 
t
h
e
 
p
o
d


-
 
A
N
D
 
t
h
e
 
d
u
m
p
 
i
s
 
s
t
r
e
a
m
e
d
 
t
o
 
M
i
n
I
O
 
S
3
 
b
u
c
k
e
t
 
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
b
a
c
k
u
p
s
`
 
v
i
a
 
`
m
c
 
c
p
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
 
B
a
c
k
u
p
 
v
a
l
i
d
a
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
 
f
r
e
s
h
 
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
 
P
V
C


-
 
W
H
E
N
 
r
e
s
t
o
r
e
d
 
f
r
o
m
 
t
h
e
 
l
a
t
e
s
t
 
`
p
g
_
d
u
m
p
`
 
b
a
c
k
u
p


-
 
T
H
E
N
 
a
l
l
 
d
a
t
a
b
a
s
e
s
 
a
r
e
 
p
r
e
s
e
n
t
 
(
`
k
e
y
c
l
o
a
k
`
,
 
`
e
l
e
m
e
n
t
`
,
 
`
n
o
t
e
s
`
,
 
`
p
l
a
n
k
a
`
,
 
e
t
c
.
)


-
 
A
N
D
 
a
l
l
 
d
a
t
a
b
a
s
e
 
u
s
e
r
s
 
h
a
v
e
 
c
o
r
r
e
c
t
 
p
e
r
m
i
s
s
i
o
n
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
 
v
i
a
 
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r




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
 
S
H
A
L
L
 
e
x
p
o
s
e
 
m
e
t
r
i
c
s
 
a
t
 
p
o
r
t
 
9
1
8
7
 
v
i
a
 
`
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
`


f
o
r
 
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
 
s
c
r
a
p
i
n
g
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
 
M
e
t
r
i
c
s
 
c
o
l
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
 
`
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
`
 
r
u
n
n
i
n
g
 
a
l
o
n
g
s
i
d
e
 
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


-
 
W
H
E
N
 
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
 
s
c
r
a
p
e
s
 
`
h
t
t
p
:
/
/
<
p
o
d
>
:
9
1
8
7
/
m
e
t
r
i
c
s
`


-
 
T
H
E
N
 
m
e
t
r
i
c
s
 
i
n
c
l
u
d
e
 
c
o
n
n
e
c
t
i
o
n
 
c
o
u
n
t
s
,
 
l
o
c
k
 
c
o
u
n
t
s
,
 
r
e
p
l
i
c
a
t
i
o
n
 
s
t
a
t
u
s
,
 
a
n
d
 
q
u
e
r
y
 
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




#
#
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e




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
u
r
p
o
s
e
 
|
 
R
e
p
l
i
c
a
s
 
|
 
S
t
o
r
a
g
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
 
S
e
r
v
e
r
 
|
 
R
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
|
 
1
 
(
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
)
 
|
 
R
W
O
 
P
V
C
 
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
 
(
1
0
G
i
,
 
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
)
 
|


|
 
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
 
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
 
m
e
t
r
i
c
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
 
S
i
d
e
c
a
r
 
|
 
N
o
n
e
 
|




#
#
 
S
e
c
u
r
i
t
y
 
C
o
n
t
e
x
t




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
 
R
u
n
A
s
U
s
e
r
 
|
 
C
a
p
a
b
i
l
i
t
i
e
s
 
|
 
S
e
c
c
o
m
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
 
S
e
r
v
e
r
 
|
 
9
9
9
 
(
p
o
s
t
g
r
e
s
)
 
|
 
d
r
o
p
:
 
A
L
L
 
|
 
R
u
n
t
i
m
e
D
e
f
a
u
l
t
 
|


|
 
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
 
|
 
1
0
0
1
 
|
 
d
r
o
p
:
 
A
L
L
 
|
 
R
u
n
t
i
m
e
D
e
f
a
u
l
t
 
|




#
#
 
C
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
 
R
e
f
e
r
e
n
c
e




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
 
I
m
a
g
e
 
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
 
(
v
e
r
s
i
o
n
 
m
a
n
a
g
e
d
 
b
y
 
u
p
s
t
r
e
a
m
 
c
h
a
r
t
)
 
|


|
 
P
V
C
 
n
a
m
e
 
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


|
 
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


|
 
P
V
C
 
s
i
z
e
 
|
 
1
0
G
i
 
|


|
 
M
e
t
r
i
c
s
 
p
o
r
t
 
|
 
9
1
8
7
 
(
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
)
 
|


|
 
D
e
p
l
o
y
 
s
t
a
g
e
 
|
 
`
0
1
0
-
i
n
f
r
a
`
 
|


|
 
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
 
|
 
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
 
|




#
#
 
D
a
t
a
b
a
s
e
 
C
a
t
a
l
o
g




|
 
D
a
t
a
b
a
s
e
 
|
 
S
e
r
v
i
c
e
 
|
 
N
o
t
e
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
|


|
 
`
k
e
y
c
l
o
a
k
`
 
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
 
U
s
e
r
s
,
 
s
e
s
s
i
o
n
s
,
 
c
l
i
e
n
t
s
,
 
r
o
l
e
s
 
|


|
 
`
e
l
e
m
e
n
t
`
 
|
 
E
l
e
m
e
n
t
 
(
M
a
t
r
i
x
)
 
|
 
S
y
n
a
p
s
e
 
h
o
m
e
s
e
r
v
e
r
 
d
a
t
a
 
|


|
 
`
n
o
t
e
s
`
 
|
 
N
o
t
e
s
 
|
 
F
i
l
e
 
m
e
t
a
d
a
t
a
,
 
Y
.
j
s
 
d
o
c
u
m
e
n
t
s
 
|


|
 
`
p
l
a
n
k
a
`
 
|
 
P
l
a
n
k
a
 
|
 
P
r
o
j
e
c
t
 
b
o
a
r
d
s
,
 
c
a
r
d
s
 
|


|
 
`
s
o
g
o
`
 
|
 
S
O
G
o
 
|
 
C
a
l
e
n
d
a
r
,
 
c
o
n
t
a
c
t
s
,
 
m
a
i
l
 
m
e
t
a
d
a
t
a
 
|


|
 
`
x
w
i
k
i
`
 
|
 
X
W
i
k
i
 
|
 
W
i
k
i
 
p
a
g
e
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
 
|


|
 
`
d
o
v
e
c
o
t
`
 
|
 
D
o
v
e
c
o
t
 
|
 
I
M
A
P
 
m
a
i
l
 
s
t
o
r
e
,
 
u
s
e
r
 
m
a
i
l
b
o
x
e
s
 
|




#
#
 
A
P
I
 
C
o
n
t
r
a
c
t
s




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
 
d
o
e
s
 
n
o
t
 
e
x
p
o
s
e
 
e
x
t
e
r
n
a
l
 
A
P
I
 
c
o
n
t
r
a
c
t
s
.
 
I
t
 
i
s
 
a
 
c
o
n
s
u
m
e
r
 
o
f


p
l
a
t
f
o
r
m
 
c
o
n
t
r
a
c
t
s
 
a
n
d
 
a
n
 
i
n
t
e
r
n
a
l
 
d
a
t
a
 
s
t
o
r
e
.




-
 
[
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
 
T
o
k
e
n
]
(
.
.
/
.
.
/
i
n
t
e
g
r
a
t
i
o
n
s
/
a
p
i
-
c
o
n
t
r
a
c
t
s
/
#
c
o
n
t
r
a
c
t
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
o
i
d
c
-
t
o
k
e
n
-
e
n
d
p
o
i
n
t
)
 
—
 
c
o
n
s
u
m
e
d
 
i
n
d
i
r
e
c
t
l
y
 
(
K
e
y
c
l
o
a
k
 
s
t
o
r
e
s
 
s
e
s
s
i
o
n
s
 
i
n
 
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
 
(
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
)


-
 
M
i
n
I
O
 
(
S
3
 
b
a
c
k
u
p
 
t
a
r
g
e
t
 
f
o
r
 
`
p
g
_
d
u
m
p
`
 
o
u
t
p
u
t
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
K
e
y
c
l
o
a
k
]
(
.
.
/
k
e
y
c
l
o
a
k
/
)
 
(
I
A
M
 
d
a
t
a
b
a
s
e
)


-
 
[
E
l
e
m
e
n
t
]
(
.
.
/
e
l
e
m
e
n
t
/
)
 
(
M
a
t
r
i
x
 
d
a
t
a
b
a
s
e
)


-
 
[
N
o
t
e
s
]
(
.
.
/
n
o
t
e
s
/
)
 
(
f
i
l
e
 
m
e
t
a
d
a
t
a
 
d
a
t
a
b
a
s
e
)


-
 
[
P
l
a
n
k
a
]
(
.
.
/
p
l
a
n
k
a
/
)
 
(
p
r
o
j
e
c
t
 
b
o
a
r
d
 
d
a
t
a
b
a
s
e
)


-
 
[
S
O
G
o
]
(
.
.
/
s
o
g
o
/
)
 
(
g
r
o
u
p
w
a
r
e
 
d
a
t
a
b
a
s
e
)


-
 
[
X
W
i
k
i
]
(
.
.
/
x
w
i
k
i
/
)
 
(
w
i
k
i
 
d
a
t
a
b
a
s
e
)


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
.
/
.
.
/
p
l
a
t
f
o
r
m
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
p
g
_
d
u
m
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
)


-
 
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
.
/
.
.
/
p
l
a
t
f
o
r
m
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
 
(
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
 
m
e
t
r
i
c
s
)




#
#
 
S
L
O




*
*
T
i
e
r
*
*
:
 
C
r
i
t
i
c
a
l
 
(
f
o
u
n
d
a
t
i
o
n
 
f
o
r
 
m
u
l
t
i
p
l
e
 
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
e
a
s
u
r
e
m
e
n
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
 
9
9
.
9
%
 
|
 
U
p
t
i
m
e
 
o
v
e
r
 
3
0
-
d
a
y
 
w
i
n
d
o
w
 
|


|
 
*
*
Q
u
e
r
y
 
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
*
*
 
|
 
<
5
0
m
s
 
|
 
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
 
q
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
 
h
i
s
t
o
g
r
a
m
 
|


|
 
*
*
C
o
n
n
e
c
t
i
o
n
 
P
o
o
l
*
*
 
|
 
<
8
0
%
 
m
a
x
 
c
o
n
n
e
c
t
i
o
n
s
 
|
 
p
o
s
t
g
r
e
s
_
e
x
p
o
r
t
e
r
 
c
o
n
n
e
c
t
i
o
n
 
c
o
u
n
t
 
|




*
*
A
l
e
r
t
s
*
*
:


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
 
d
o
w
n
 
(
`
m
y
s
q
l
_
u
p
 
=
=
 
0
`
)
 
f
o
r
 
5
 
m
i
n
u
t
e
s
 
→
 
C
r
i
t
i
c
a
l
 
a
l
e
r
t


-
 
C
o
n
n
e
c
t
i
o
n
 
c
o
u
n
t
 
>
8
0
%
 
m
a
x
 
f
o
r
 
1
0
 
m
i
n
u
t
e
s
 
→
 
P
3
 
a
l
e
r
t


-
 
R
e
p
l
i
c
a
t
i
o
n
 
l
a
g
 
(
i
f
 
e
n
a
b
l
e
d
)
 
>
3
0
 
s
e
c
o
n
d
s
 
→
 
P
2
 
a
l
e
r
t




*
*
C
a
p
a
c
i
t
y
*
*
:


-
 
2
0
0
 
m
a
x
 
c
o
n
n
e
c
t
i
o
n
s


-
 
1
0
G
i
 
s
t
o
r
a
g
e
 
(
e
x
p
a
n
d
a
b
l
e
 
v
i
a
 
P
V
C
 
r
e
s
i
z
e
)




#
#
 
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




*
*
T
i
e
r
*
*
:
 
C
r
i
t
i
c
a
l
 
(
R
P
O
:
 
2
4
h
 
v
i
a
 
d
a
i
l
y
 
p
g
_
d
u
m
p
,
 
R
T
O
:
 
3
0
 
m
i
n
)




*
*
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
*
*
:


-
 
D
a
i
l
y
 
`
p
g
_
d
u
m
p
 
-
-
a
l
l
`
 
t
o
 
S
3
 
b
u
c
k
e
t
 
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
b
a
c
k
u
p
s
`


-
 
B
a
c
k
u
p
 
j
o
b
 
r
u
n
s
 
o
n
 
s
a
m
e
 
n
o
d
e
 
a
s
 
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
 
(
R
W
O
 
c
o
n
s
t
r
a
i
n
t
)




*
*
R
e
c
o
v
e
r
y
 
O
r
d
e
r
*
*
:


1
.
 
R
e
s
t
o
r
e
 
P
V
C
 
f
r
o
m
 
l
a
t
e
s
t
 
`
p
g
_
d
u
m
p
`
 
b
a
c
k
u
p


2
.
 
R
e
s
t
a
r
t
 
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
 
p
o
d


3
.
 
V
e
r
i
f
y
 
a
l
l
 
d
a
t
a
b
a
s
e
s
 
p
r
e
s
e
n
t




*
*
F
a
i
l
u
r
e
 
S
c
e
n
a
r
i
o
s
*
*
:


-
 
*
*
P
V
C
 
c
o
r
r
u
p
t
i
o
n
*
*
:
 
D
e
l
e
t
e
 
P
V
C
,
 
r
e
s
t
o
r
e
 
f
r
o
m
 
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
 
r
e
c
r
e
a
t
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
 
p
o
d


-
 
*
*
D
a
t
a
 
l
o
s
s
*
*
:
 
R
e
s
t
o
r
e
 
f
r
o
m
 
l
a
t
e
s
t
 
S
3
 
b
a
c
k
u
p
 
(
u
p
 
t
o
 
2
4
h
 
d
a
t
a
 
l
o
s
s
)




#
#
 
K
n
o
w
n
 
Q
u
i
r
k
s




-
 
*
*
S
i
n
g
l
e
 
n
o
d
e
*
*
:
 
N
o
 
r
e
p
l
i
c
a
t
i
o
n
 
o
r
 
H
A
.
 
A
l
l
 
s
e
r
v
i
c
e
s
 
d
e
p
e
n
d
i
n
g
 
o
n
 
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
 
s
h
a
r
e
 
a
 
s
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
f
a
i
l
u
r
e
.


-
 
*
*
R
W
O
 
c
o
n
s
t
r
a
i
n
t
*
*
:
 
B
a
c
k
u
p
 
p
o
d
s
 
m
u
s
t
 
r
u
n
 
o
n
 
t
h
e
 
s
a
m
e
 
n
o
d
e
 
a
s
 
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
 
p
o
d
 
(
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
 
a
c
r
o
s
s
 
n
o
d
e
s
)
.


-
 
*
*
H
e
l
m
 
p
a
s
s
w
o
r
d
 
s
y
n
c
*
*
:
 
P
a
s
s
w
o
r
d
s
 
a
r
e
 
m
a
n
a
g
e
d
 
v
i
a
 
H
e
l
m
 
v
a
l
u
e
s
.
 
P
a
s
s
w
o
r
d
 
c
h
a
n
g
e
s
 
r
e
q
u
i
r
e
 
H
e
l
m
 
u
p
g
r
a
d
e
.

