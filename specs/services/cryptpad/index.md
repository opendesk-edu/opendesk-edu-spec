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
 
C
r
y
p
t
P
a
d




#
#
 
P
u
r
p
o
s
e




E
n
d
-
t
o
-
e
n
d
 
e
n
c
r
y
p
t
e
d
 
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
v
e
 
e
d
i
t
o
r
 
f
o
r
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
s
,
 
a
c
c
e
s
s
e
d


t
h
r
o
u
g
h
 
N
e
x
t
c
l
o
u
d
 
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
.
 
C
r
y
p
t
P
a
d
 
p
r
o
v
i
d
e
s
 
E
2
E
 
e
n
c
r
y
p
t
i
o
n
 
a
t
 
t
h
e


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
 
l
a
y
e
r
 
—
 
t
h
e
 
s
e
r
v
e
r
 
c
a
n
n
o
t
 
r
e
a
d
 
d
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
t
e
n
t
.
 
S
u
p
p
o
r
t
s
 
d
i
a
g
r
a
m


e
d
i
t
i
n
g
 
(
d
i
a
g
r
a
m
 
p
a
d
 
t
y
p
e
)
 
w
i
t
h
 
r
e
g
i
s
t
r
a
t
i
o
n
 
r
e
s
t
r
i
c
t
e
d
 
t
o
 
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
 
a
c
c
e
s
s


o
n
l
y
.




#
#
 
S
c
o
p
e




T
h
i
s
 
s
p
e
c
 
d
e
f
i
n
e
s
:


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
 
E
n
d
-
t
o
-
e
n
d
 
e
n
c
r
y
p
t
e
d
 
d
i
a
g
r
a
m
 
e
d
i
t
i
n
g
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
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
,
 
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
 
a
c
c
e
s
s
 
(
r
e
g
i
s
t
r
a
t
i
o
n
 
r
e
s
t
r
i
c
t
e
d
)
,
 
c
l
i
e
n
t
-
s
i
d
e
 
e
n
c
r
y
p
t
i
o
n
,
 
d
o
c
u
m
e
n
t
 
p
e
r
s
i
s
t
e
n
c
e
 
v
i
a
 
N
e
x
t
c
l
o
u
d


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
 
S
t
a
n
d
a
l
o
n
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
 
(
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
-
o
n
l
y
)
,
 
r
i
c
h
 
t
e
x
t
/
c
o
d
e
/
s
l
i
d
e
/
s
p
r
e
a
d
s
h
e
e
t
 
p
a
d
s
 
(
d
i
a
g
r
a
m
 
o
n
l
y
)
,
 
p
u
b
l
i
c
 
p
a
d
 
s
h
a
r
i
n
g
 
(
r
e
g
i
s
t
r
a
t
i
o
n
 
r
e
s
t
r
i
c
t
e
d
)
,
 
s
e
r
v
e
r
-
s
i
d
e
 
d
o
c
u
m
e
n
t
 
s
t
o
r
a
g
e
 
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
-
m
a
n
a
g
e
d
)




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
 
S
t
a
n
d
a
l
o
n
e
 
d
o
c
u
m
e
n
t
 
e
d
i
t
i
n
g
 
o
u
t
s
i
d
e
 
N
e
x
t
c
l
o
u
d
 
(
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
-
o
n
l
y
 
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
 
R
i
c
h
 
t
e
x
t
/
c
o
d
e
/
s
l
i
d
e
/
s
p
r
e
a
d
s
h
e
e
t
 
p
a
d
s
 
(
d
i
a
g
r
a
m
 
o
n
l
y
 
i
n
 
o
p
e
n
D
e
s
k
)


-
 
P
u
b
l
i
c
 
p
a
d
 
s
h
a
r
i
n
g
 
(
r
e
g
i
s
t
r
a
t
i
o
n
 
r
e
s
t
r
i
c
t
e
d
 
p
r
e
v
e
n
t
s
 
t
h
i
s
)


-
 
S
e
r
v
e
r
-
s
i
d
e
 
d
o
c
u
m
e
n
t
 
s
t
o
r
a
g
e
 
(
p
e
r
s
i
s
t
e
n
c
e
 
i
s
 
N
e
x
t
c
l
o
u
d
-
m
a
n
a
g
e
d
)




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
i
o
n


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
 
N
o
d
e
.
j
s
 
(
C
r
y
p
t
P
a
d
)
 
|
 
1
0
0
1
 
(
c
r
y
p
t
p
a
d
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
*
*
:
 
C
r
y
p
t
P
a
d
 
d
o
e
s
 
n
o
t
 
r
u
n
 
s
t
a
n
d
a
l
o
n
e
 
i
n
 
t
h
i
s
 
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
.
 
I
t
 
r
e
q
u
i
r
e
s
 
N
e
x
t
c
l
o
u
d
 
f
o
r
 
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
i
o
n
 
a
n
d
 
d
o
c
u
m
e
n
t
 
p
e
r
s
i
s
t
e
n
c
e
.
 
C
r
y
p
t
P
a
d
 
i
t
s
e
l
f
 
s
t
o
r
e
s
 
n
o
 
d
a
t
a
.


*
*
E
n
d
-
t
o
-
e
n
d
 
e
n
c
r
y
p
t
i
o
n
*
*
:
 
C
r
y
p
t
P
a
d
 
u
s
e
s
 
c
l
i
e
n
t
-
s
i
d
e
 
e
n
c
r
y
p
t
i
o
n
.
 
A
d
m
i
n
i
s
t
r
a
t
o
r
s
 
C
A
N
N
O
T
 
r
e
c
o
v
e
r
 
e
n
c
r
y
p
t
e
d
 
d
o
c
u
m
e
n
t
s
.
 
I
f
 
a
 
u
s
e
r
 
l
o
s
e
s
 
t
h
e
i
r
 
k
e
y
,
 
d
a
t
a
 
i
s
 
p
e
r
m
a
n
e
n
t
l
y
 
l
o
s
t
.




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
*
*
 
(
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
 
p
l
a
t
f
o
r
m
)
:
 
P
r
o
v
i
d
e
s
 
u
s
e
r
 
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
i
o
n
,
 
d
o
c
u
m
e
n
t
 
s
t
o
r
a
g
e
,
 
a
n
d
 
s
e
a
m
l
e
s
s
 
e
d
i
t
i
n
g
 
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


-
 
*
*
K
e
y
c
l
o
a
k
*
*
 
(
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
i
o
n
)
:
 
U
s
e
s
 
o
p
a
q
u
e
 
O
A
u
t
h
2
 
t
o
k
e
n
s
 
f
o
r
 
s
e
c
u
r
e
 
u
s
e
r
 
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
i
o
n


-
 
*
*
R
e
d
i
s
*
*
 
(
s
e
s
s
i
o
n
 
s
t
o
r
a
g
e
)
:
 
S
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
 
t
o
k
e
n
s
 
a
n
d
 
p
a
d
 
m
e
t
a
d
a
t
a


-
 
*
*
C
e
p
h
F
S
/
H
D
D
*
*
 
(
s
t
o
r
a
g
e
)
:
 
P
r
o
v
i
d
e
s
 
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
 
f
o
r
 
C
r
y
p
t
P
a
d
 
d
a
t
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
c
e




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
*
*
 
(
d
o
c
u
m
e
n
t
 
e
d
i
t
i
n
g
)
:
 
S
e
a
m
l
e
s
s
 
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
 
f
o
r
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
 
e
d
i
t
i
n
g
 
w
i
t
h
i
n
 
N
e
x
t
c
l
o
u
d
 
i
n
t
e
r
f
a
c
e


-
 
*
*
K
e
y
c
l
o
a
k
*
*
 
(
S
S
O
)
:
 
P
r
o
v
i
d
e
s
 
s
i
n
g
l
e
 
s
i
g
n
-
o
n
 
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
i
o
n
 
v
i
a
 
O
A
u
t
h
2




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
 
E
n
c
r
y
p
t
e
d
 
d
i
a
g
r
a
m
 
e
d
i
t
i
n
g
 
v
i
a
 
N
e
x
t
c
l
o
u
d




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
e
d
i
t
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
s
 
w
i
t
h
i
n
 
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
i
t
h
 
e
n
d
-
t
o
-
e
n
d


e
n
c
r
y
p
t
i
o
n
 
a
n
d
 
s
e
a
m
l
e
s
s
 
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
 
U
s
e
r
 
e
d
i
t
s
 
d
i
a
g
r
a
m
 
i
n
 
N
e
x
t
c
l
o
u
d


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
o
p
e
n
i
n
g
 
a
 
`
.
c
r
y
p
t
p
a
d
-
d
i
a
g
r
a
m
`
 
f
i
l
e
 
i
n
 
N
e
x
t
c
l
o
u
d


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
l
i
c
k
s
 
t
o
 
e
d
i
t


-
 
T
H
E
N
 
C
r
y
p
t
P
a
d
 
l
o
a
d
s
 
w
i
t
h
i
n
 
N
e
x
t
c
l
o
u
d
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p


-
 
A
N
D
 
t
h
e
 
d
o
c
u
m
e
n
t
 
i
s
 
d
e
c
r
y
p
t
e
d
 
c
l
i
e
n
t
-
s
i
d
e
 
v
i
a
 
e
n
c
r
y
p
t
e
d
 
b
l
o
b


-
 
A
N
D
 
s
e
r
v
e
r
 
c
a
n
n
o
t
 
r
e
a
d
 
d
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
t
e
n
t
 
(
E
2
E
 
e
n
c
r
y
p
t
i
o
n
)


-
 
A
N
D
 
c
h
a
n
g
e
s
 
a
r
e
 
s
a
v
e
d
 
t
o
 
N
e
x
t
c
l
o
u
d
 
d
i
s
k
,
 
e
n
c
r
y
p
t
e
d


-
 
A
N
D
 
d
e
a
c
t
i
v
a
t
i
n
g
 
p
u
b
l
i
c
 
a
c
c
e
s
s
 
w
o
u
l
d
 
b
r
e
a
k
 
N
e
x
t
c
l
o
u
d
 
p
l
u
g
i
n
 
(
m
u
s
t
 
r
e
m
a
i
n
 
e
n
a
b
l
e
d
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
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p
 
d
o
c
u
m
e
n
t
 
s
t
o
r
a
g
e


-
 
G
I
V
E
N
 
a
 
C
r
y
p
t
P
a
d
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
 
e
d
i
t
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
s
a
v
e
s
 
c
h
a
n
g
e
s


-
 
T
H
E
N
 
t
h
e
 
e
n
c
r
y
p
t
e
d
 
d
o
c
u
m
e
n
t
 
b
l
o
b
 
i
s
 
s
t
o
r
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d
 
S
3
 
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
 
f
i
l
e
 
p
a
t
h
 
i
s
 
`
h
t
t
p
s
:
/
/
n
e
x
t
c
l
o
u
d
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
e
d
u
/
a
p
p
s
/
c
r
y
p
t
p
a
d
d
i
a
g
r
a
m
`


-
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
m
e
t
a
d
a
t
a
 
i
n
c
l
u
d
e
s
 
p
a
d
 
I
D
,
 
v
e
r
s
i
o
n
,
 
l
a
s
t
 
m
o
d
i
f
i
e
d
 
t
i
m
e
s
t
a
m
p


-
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
s
e
r
v
e
s
 
t
h
e
 
f
i
l
e
 
v
i
a
 
`
G
E
T
 
/
a
p
p
s
/
c
r
y
p
t
p
a
d
d
i
a
g
r
a
m
/
`
 
e
n
d
p
o
i
n
t




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
 
E
n
c
r
y
p
t
i
o
n
 
k
e
y
 
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


-
 
G
I
V
E
N
 
a
 
C
r
y
p
t
P
a
d
 
d
o
c
u
m
e
n
t
 
e
n
c
r
y
p
t
e
d
 
w
i
t
h
 
u
s
e
r
-
s
p
e
c
i
f
i
c
 
k
e
y


-
 
W
H
E
N
 
t
h
e
 
d
o
c
u
m
e
n
t
 
i
s
 
c
r
e
a
t
e
d
 
i
n
 
C
r
y
p
t
P
a
d


-
 
T
H
E
N
 
e
n
c
r
y
p
t
i
o
n
 
k
e
y
 
i
s
 
g
e
n
e
r
a
t
e
d
 
c
l
i
e
n
t
-
s
i
d
e
 
(
r
a
n
d
o
m
 
2
5
6
-
b
i
t
)


-
 
A
N
D
 
k
e
y
 
i
s
 
n
e
v
e
r
 
s
e
n
t
 
t
o
 
s
e
r
v
e
r
 
(
c
l
i
e
n
t
-
s
i
d
e
 
o
n
l
y
)


-
 
A
N
D
 
k
e
y
 
i
s
 
s
t
o
r
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d
 
u
s
e
r
 
p
r
e
f
e
r
e
n
c
e
s
 
(
e
n
c
r
y
p
t
e
d
)


-
 
A
N
D
 
k
e
y
 
s
h
a
r
i
n
g
 
w
i
t
h
 
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
o
r
s
 
r
e
l
i
e
s
 
o
n
 
N
e
x
t
c
l
o
u
d
 
s
h
a
r
e
 
m
e
c
h
a
n
i
s
m




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
e
g
i
s
t
r
a
t
i
o
n
 
r
e
s
t
r
i
c
t
i
o
n




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
r
e
s
t
r
i
c
t
 
n
e
w
 
u
s
e
r
 
r
e
g
i
s
t
r
a
t
i
o
n
 
t
o
 
p
r
e
v
e
n
t
 
a
n
o
n
y
m
o
u
s
 
a
c
c
e
s
s


a
n
d
 
e
n
s
u
r
e
 
o
n
l
y
 
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
 
N
e
x
t
c
l
o
u
d
 
u
s
e
r
s
 
c
a
n
 
a
c
c
e
s
s
 
p
a
d
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
 
R
e
g
i
s
t
r
a
t
i
o
n
 
b
l
o
c
k
e
d
 
f
o
r
 
a
n
o
n
y
m
o
u
s
 
u
s
e
r
s


-
 
G
I
V
E
N
 
`
r
e
s
t
r
i
c
t
R
e
g
i
s
t
r
a
t
i
o
n
:
 
t
r
u
e
`
 
i
n
 
C
r
y
p
t
P
a
d
 
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


-
 
W
H
E
N
 
a
n
 
u
n
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
 
u
s
e
r
 
t
r
i
e
s
 
t
o
 
c
r
e
a
t
e
 
a
n
 
a
c
c
o
u
n
t
 
d
i
r
e
c
t
l
y


-
 
T
H
E
N
 
r
e
g
i
s
t
r
a
t
i
o
n
 
f
o
r
m
 
r
e
t
u
r
n
s
 
e
r
r
o
r
:
 
"
R
e
g
i
s
t
r
a
t
i
o
n
 
d
i
s
a
b
l
e
d
"


-
 
A
N
D
 
e
r
r
o
r
 
m
e
s
s
a
g
e
 
r
e
d
i
r
e
c
t
s
:
 
"
P
l
e
a
s
e
 
a
c
c
e
s
s
 
v
i
a
 
N
e
x
t
c
l
o
u
d
"


-
 
A
N
D
 
o
n
l
y
 
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
 
u
s
e
r
s
 
(
v
i
a
 
N
e
x
t
c
l
o
u
d
 
s
e
s
s
i
o
n
 
h
e
a
d
e
r
)
 
c
a
n
 
c
r
e
a
t
e
 
p
a
d
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
 
N
e
x
t
c
l
o
u
d
 
s
e
s
s
i
o
n
 
d
e
l
e
g
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
 
u
s
e
r
 
l
o
g
g
e
d
 
i
n
t
o
 
N
e
x
t
c
l
o
u
d


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
a
c
c
e
s
s
e
s
 
C
r
y
p
t
P
a
d
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
i
n
c
l
u
d
e
s
 
`
X
-
U
s
e
r
-
I
d
`
 
a
n
d
 
`
X
-
U
s
e
r
-
T
o
k
e
n
`
 
h
e
a
d
e
r
s


-
 
A
N
D
 
C
r
y
p
t
P
a
d
 
v
a
l
i
d
a
t
e
s
 
s
e
s
s
i
o
n
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
A
P
I
 
(
`
O
C
-
S
e
s
s
i
o
n
I
d
`
,
 
`
O
C
-
U
s
e
r
I
d
`
)


-
 
A
N
D
 
C
r
y
p
t
P
a
d
 
c
r
e
a
t
e
s
 
a
n
o
n
y
m
o
u
s
 
p
a
d
 
(
n
o
 
r
e
g
i
s
t
r
a
t
i
o
n
 
r
e
q
u
i
r
e
d
)


-
 
A
N
D
 
p
a
d
 
c
r
e
a
t
i
o
n
 
t
i
m
e
s
t
a
m
p
s
 
u
s
e
r
 
a
u
t
h
 
v
i
a
 
h
e
a
d
e
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
 
M
u
l
t
i
-
u
s
e
r
 
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
v
e
 
e
d
i
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
 
a
 
C
r
y
p
t
P
a
d
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
 
s
h
a
r
e
d
 
w
i
t
h
 
m
u
l
t
i
p
l
e
 
N
e
x
t
c
l
o
u
d
 
u
s
e
r
s


-
 
W
H
E
N
 
u
s
e
r
s
 
e
d
i
t
 
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


-
 
T
H
E
N
 
c
h
a
n
g
e
s
 
a
r
e
 
s
y
n
c
h
r
o
n
i
z
e
d
 
v
i
a
 
W
e
b
S
o
c
k
e
t
 
(
`
w
s
:
/
/
c
r
y
p
t
p
a
d
/
c
r
y
p
t
p
a
d
_
w
e
b
s
o
c
k
e
t
`
)


-
 
A
N
D
 
O
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
 
T
r
a
n
s
f
o
r
m
a
t
i
o
n
 
(
O
T
)
 
a
l
g
o
r
i
t
h
m
 
h
a
n
d
l
e
s
 
c
o
n
c
u
r
r
e
n
t
 
e
d
i
t
s


-
 
A
N
D
 
e
a
c
h
 
u
s
e
r
 
s
e
e
s
 
c
h
a
n
g
e
s
 
i
n
 
r
e
a
l
-
t
i
m
e
 
(
<
 
2
0
0
m
s
 
l
a
t
e
n
c
y
)


-
 
A
N
D
 
c
u
r
s
o
r
 
p
o
s
i
t
i
o
n
s
 
a
r
e
 
s
y
n
c
h
r
o
n
i
z
e
d
 
a
c
r
o
s
s
 
u
s
e
r
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
a
t
e
l
e
s
s
 
s
t
o
r
a
g
e




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
r
u
n
 
w
i
t
h
o
u
t
 
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
 
s
t
o
r
a
g
e
 
b
y
 
d
e
f
a
u
l
t
,
 
r
e
l
y
i
n
g
 
o
n
 
N
e
x
t
c
l
o
u
d


f
o
r
 
d
o
c
u
m
e
n
t
 
p
e
r
s
i
s
t
e
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
 
N
o
 
P
V
C
 
r
e
q
u
i
r
e
d


-
 
G
I
V
E
N
 
`
p
e
r
s
i
s
t
e
n
c
e
.
e
n
a
b
l
e
d
:
 
f
a
l
s
e
`
 
i
n
 
C
r
y
p
t
P
a
d
 
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


-
 
W
H
E
N
 
t
h
e
 
C
r
y
p
t
P
a
d
 
p
o
d
 
r
e
s
t
a
r
t
s


-
 
T
H
E
N
 
e
n
c
r
y
p
t
e
d
 
p
a
d
s
 
a
r
e
 
N
O
T
 
s
t
o
r
e
d
 
l
o
c
a
l
l
y
 
i
n
 
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
 
a
l
l
 
p
a
d
 
d
a
t
a
 
i
s
 
s
t
o
r
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d
 
S
3
 
o
r
 
C
e
p
h
F
S


-
 
A
N
D
 
p
o
d
 
r
e
s
t
a
r
t
s
 
a
r
e
 
f
a
s
t
 
(
n
o
 
f
i
l
e
 
s
y
s
t
e
m
 
s
y
n
c
 
d
e
l
a
y
)


-
 
A
N
D
 
H
P
A
 
c
a
n
 
s
c
a
l
e
 
r
e
p
l
i
c
a
s
 
w
i
t
h
o
u
t
 
d
a
t
a
 
c
o
n
s
i
s
t
e
n
c
y
 
c
o
n
c
e
r
n
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
 
N
e
x
t
c
l
o
u
d
-
m
a
n
a
g
e
d
 
p
e
r
s
i
s
t
e
n
c
e


-
 
G
I
V
E
N
 
a
 
C
r
y
p
t
P
a
d
 
d
i
a
g
r
a
m
 
d
o
c
u
m
e
n
t
 
e
d
i
t
e
d
 
m
u
l
t
i
p
l
e
 
t
i
m
e
s


-
 
W
H
E
N
 
v
e
r
s
i
o
n
s
 
a
c
c
u
m
u
l
a
t
e


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
s
t
o
r
e
s
 
e
a
c
h
 
v
e
r
s
i
o
n
 
w
i
t
h
 
v
e
r
s
i
o
n
 
h
i
s
t
o
r
y


-
 
A
N
D
 
C
r
y
p
t
P
a
d
 
r
e
l
i
e
s
 
o
n
 
N
e
x
t
c
l
o
u
d
'
s
 
f
i
l
e
 
v
e
r
s
i
o
n
i
n
g


-
 
A
N
D
 
o
l
d
 
v
e
r
s
i
o
n
s
 
c
a
n
 
b
e
 
r
e
s
t
o
r
e
d
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
U
I


-
 
A
N
D
 
C
r
y
p
t
P
a
d
 
d
o
e
s
 
n
o
t
 
n
e
e
d
 
t
o
 
m
a
n
a
g
e
 
v
e
r
s
i
o
n
 
h
i
s
t
o
r
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
 
A
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




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
s
u
p
p
o
r
t
 
h
o
r
i
z
o
n
t
a
l
 
p
o
d
 
a
u
t
o
s
c
a
l
i
n
g
 
f
o
r
 
v
a
r
i
a
b
l
e
 
l
o
a
d
 
w
i
t
h


d
e
f
i
n
e
d
 
r
e
s
o
u
r
c
e
 
l
i
m
i
t
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
c
a
l
e
 
u
p
 
o
n
 
h
i
g
h
 
C
P
U
 
l
o
a
d


-
 
G
I
V
E
N
 
H
P
A
 
c
o
n
f
i
g
u
r
e
d
 
w
i
t
h
 
`
t
a
r
g
e
t
C
P
U
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
P
e
r
c
e
n
t
a
g
e
:
 
7
0
`


-
 
`
m
i
n
R
e
p
l
i
c
a
s
:
 
2
`
,
 
`
m
a
x
R
e
p
l
i
c
a
s
:
 
1
0
`


-
 
W
H
E
N
 
C
P
U
 
u
s
a
g
e
 
e
x
c
e
e
d
s
 
7
0
%
 
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


-
 
T
H
E
N
 
n
e
w
 
r
e
p
l
i
c
a
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
 
(
u
p
 
t
o
 
m
a
x
 
1
0
 
r
e
p
l
i
c
a
s
)


-
 
A
N
D
 
n
e
w
 
r
e
p
l
i
c
a
s
 
a
r
e
 
r
e
a
d
y
 
t
o
 
s
e
r
v
e
 
r
e
q
u
e
s
t
s
 
w
i
t
h
i
n
 
3
0
 
s
e
c
o
n
d
s


-
 
A
N
D
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
d
i
s
t
r
i
b
u
t
e
s
 
t
r
a
f
f
i
c
 
a
c
r
o
s
s
 
r
e
p
l
i
c
a
s


-
 
A
N
D
 
a
u
t
o
s
c
a
l
i
n
g
 
e
v
e
n
t
s
 
t
r
i
g
g
e
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
 
a
l
e
r
t
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
 
S
c
a
l
e
 
d
o
w
n
 
o
n
 
l
o
w
 
l
o
a
d


-
 
G
I
V
E
N
 
H
P
A
 
c
o
n
f
i
g
u
r
e
d
 
w
i
t
h
 
`
t
a
r
g
e
t
C
P
U
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
P
e
r
c
e
n
t
a
g
e
:
 
7
0
`


-
 
W
H
E
N
 
C
P
U
 
u
s
a
g
e
 
d
r
o
p
s
 
b
e
l
o
w
 
5
0
%
 
f
o
r
 
1
5
 
m
i
n
u
t
e
s


-
 
T
H
E
N
 
r
e
p
l
i
c
a
s
 
a
r
e
 
t
e
r
m
i
n
a
t
e
d
 
(
d
o
w
n
 
t
o
 
m
i
n
 
2
 
r
e
p
l
i
c
a
s
)


-
 
A
N
D
 
e
x
i
s
t
i
n
g
 
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
 
d
r
a
i
n
 
g
r
a
c
e
f
u
l
l
y
 
(
n
o
 
s
e
s
s
i
o
n
 
d
r
o
p
s
)


-
 
A
N
D
 
s
c
a
l
e
-
d
o
w
n
 
r
e
s
p
e
c
t
s
 
`
s
c
a
l
e
D
o
w
n
:
 
s
t
a
b
i
l
i
z
a
t
i
o
n
W
i
n
d
o
w
S
e
c
o
n
d
s
:
 
6
0
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
e
s
o
u
r
c
e
 
l
i
m
i
t
s
 
a
n
d
 
r
e
q
u
e
s
t
s


-
 
G
I
V
E
N
 
C
r
y
p
t
P
a
d
 
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
 
w
i
t
h
 
d
e
f
i
n
e
d
 
r
e
s
o
u
r
c
e
s


-
 
T
H
E
N
 
c
o
n
t
a
i
n
e
r
 
m
e
m
o
r
y
:
 
`
2
5
6
M
i
`
 
(
l
i
m
i
t
 
5
1
2
M
i
)
,
 
C
P
U
:
 
`
2
5
0
m
`
 
(
l
i
m
i
t
 
5
0
0
m
)


-
 
A
N
D
 
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
:
 
3
 
b
y
 
d
e
f
a
u
l
t
 
(
p
e
r
 
H
P
A
 
c
o
n
f
i
g
)


-
 
A
N
D
 
p
o
d
 
d
i
s
r
u
p
t
i
o
n
 
b
u
d
g
e
t
:
 
`
m
i
n
 
a
v
a
i
l
a
b
l
e
:
 
5
0
%
`


-
 
A
N
D
 
O
O
M
K
i
l
l
e
r
 
p
r
i
o
r
i
t
i
z
e
s
 
t
e
r
m
i
n
a
t
i
n
g
 
i
d
l
e
 
r
e
p
l
i
c
a
s
 
f
i
r
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
e
c
u
r
i
t
y
 
a
n
d
 
i
s
o
l
a
t
i
o
n




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
r
u
n
 
w
i
t
h
 
m
i
n
i
m
a
l
 
p
r
i
v
i
l
e
g
e
s
 
a
n
d
 
c
o
n
t
a
i
n
e
r
 
s
e
c
u
r
i
t
y
 
h
a
r
d
e
n
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
 
N
o
n
-
r
o
o
t
 
c
o
n
t
a
i
n
e
r


-
 
G
I
V
E
N
 
C
r
y
p
t
P
o
d
 
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
 
w
i
t
h
 
s
e
c
u
r
i
t
y
 
c
o
n
t
e
x
t


-
 
T
H
E
N
 
`
r
u
n
A
s
U
s
e
r
:
 
4
0
0
1
`
,
 
`
r
u
n
A
s
G
r
o
u
p
:
 
4
0
0
1
`
,
 
`
f
s
G
r
o
u
p
:
 
4
0
0
1
`


-
 
A
N
D
 
`
r
u
n
A
s
N
o
n
R
o
o
t
:
 
t
r
u
e
`


-
 
A
N
D
 
c
o
n
t
a
i
n
e
r
 
c
a
n
n
o
t
 
e
s
c
a
l
a
t
e
 
t
o
 
r
o
o
t
 
p
r
i
v
i
l
e
g
e
s


-
 
A
N
D
 
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
 
r
e
s
p
e
c
t
s
 
P
O
S
I
X
 
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
 
C
a
p
a
b
i
l
i
t
y
 
d
r
o
p
p
i
n
g


-
 
G
I
V
E
N
 
C
r
y
p
t
P
a
d
 
s
e
c
u
r
i
t
y
 
p
o
l
i
c
y


-
 
T
H
E
N
 
`
c
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
.
d
r
o
p
:
 
[
A
L
L
]
`


-
 
A
N
D
 
n
o
 
l
i
n
u
x
 
c
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
 
a
r
e
 
a
d
d
e
d
 
(
n
o
 
`
c
a
p
-
a
d
d
`
)


-
 
A
N
D
 
c
o
n
t
a
i
n
e
r
 
c
a
n
n
o
t
 
a
c
c
e
s
s
 
h
o
s
t
 
d
e
v
i
c
e
s
 
o
r
 
p
r
i
v
i
l
e
g
e
d
 
o
p
e
r
a
t
i
o
n
s


-
 
A
N
D
 
s
e
c
c
o
m
p
 
p
r
o
f
i
l
e
 
i
s
 
`
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
 
N
e
t
w
o
r
k
 
i
s
o
l
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
 
C
r
y
p
t
P
a
d
 
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
 
w
i
t
h
 
n
e
t
w
o
r
k
 
p
o
l
i
c
y


-
 
T
H
E
N
 
i
n
g
r
e
s
s
 
a
l
l
o
w
e
d
 
f
r
o
m
 
N
e
x
t
c
l
o
u
d
 
o
n
l
y
 
(
`
h
t
t
p
/
h
t
t
p
s
`
)


-
 
A
N
D
 
e
g
r
e
s
s
 
a
l
l
o
w
e
d
 
t
o
 
N
e
x
t
c
l
o
u
d
 
C
l
o
u
d
 
(
`
h
t
t
p
/
h
t
t
p
s
`
)
,
 
n
o
 
e
x
t
e
r
n
a
l
 
o
u
t
b
o
u
n
d
 
(
i
n
t
e
r
n
e
t
)
 
t
r
a
f
f
i
c
 
o
t
h
e
r
 
t
h
a
n
 
f
r
o
m
 
`
I
S
T
I
O
 
E
G
R
E
S
S
 
G
A
T
E
W
A
Y
`


-
 
A
N
D
 
D
N
S
 
q
u
e
r
i
e
s
 
r
e
s
o
l
v
e
 
o
n
l
y
 
i
n
t
e
r
n
a
l
 
s
e
r
v
i
c
e
s
 
(
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
`
,
 
n
o
t
 
e
x
t
e
r
n
a
l
 
d
o
m
a
i
n
s
)


-
 
A
N
D
 
n
e
t
w
o
r
k
 
p
o
l
i
c
y
 
b
l
o
c
k
s
 
c
l
u
s
t
e
r
-
i
n
t
e
r
n
a
l
 
c
r
o
s
s
-
n
a
m
e
s
p
a
c
e
 
t
r
a
f
f
i
c




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
 
H
e
a
l
t
h
 
a
n
d
 
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




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
b
e
 
h
e
a
l
t
h
y
 
a
n
d
 
m
o
n
i
t
o
r
a
b
l
e
 
w
i
t
h
 
h
e
a
l
t
h
 
e
n
d
p
o
i
n
t
s
 
a
n
d
 
m
e
t
r
i
c
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
 
H
e
a
l
t
h
 
c
h
e
c
k
s


-
 
G
I
V
E
N
 
C
r
y
p
t
P
a
d
 
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


-
 
T
H
E
N
 
h
e
a
l
t
h
 
p
r
o
b
e
 
(
`
/
a
p
i
/
h
e
a
l
t
h
`
)
 
r
e
s
p
o
n
d
s
 
w
i
t
h
 
`
{
"
s
t
a
t
u
s
"
:
"
o
k
"
}
`
 
o
n
 
H
T
T
P
 
p
o
r
t
 
3
0
0
0


-
 
A
N
D
 
l
i
v
e
n
e
s
s
 
p
r
o
b
e
 
c
h
e
c
k
s
 
c
o
n
t
a
i
n
e
r
 
h
e
a
l
t
h
 
(
n
o
 
d
e
a
d
l
o
c
k
s
)


-
 
A
N
D
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
 
c
h
e
c
k
s
 
N
e
x
t
c
l
o
u
d
 
c
o
n
n
e
c
t
i
v
i
t
y
 
(
c
a
n
 
r
e
a
c
h
 
N
e
x
t
c
l
o
u
d
 
A
P
I
)


-
 
A
N
D
 
s
t
a
r
t
u
p
 
p
r
o
b
e
 
d
e
l
a
y
s
 
f
a
i
l
i
n
g
 
l
i
v
e
n
e
s
s
 
c
h
e
c
k
s
 
(
a
l
l
o
w
 
6
0
s
 
s
t
a
r
t
u
p
 
w
i
n
d
o
w
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
 
M
e
t
r
i
c
s
 
a
n
d
 
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


-
 
G
I
V
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
 
c
o
n
f
i
g
u
r
e
d
 
f
o
r
 
s
c
r
a
p
i
n
g


-
 
T
H
E
N
 
C
r
y
p
t
P
a
d
 
e
x
p
o
s
e
s
 
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
 
(
`
/
m
e
t
r
i
c
s
`
)
 
e
n
d
p
o
i
n
t


-
 
A
N
D
 
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
 
`
c
r
y
p
t
p
a
d
_
w
e
b
s
o
c
k
e
t
_
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
`
 
(
g
a
u
g
e
)
,
 
`
c
r
y
p
t
p
a
d
_
d
o
c
u
m
e
n
t
_
e
d
i
t
s
`
 
(
c
o
u
n
t
e
r
)


-
 
A
N
D
 
G
r
a
f
a
n
a
 
d
a
s
h
b
o
a
r
d
 
s
h
o
w
s
 
p
a
g
e
 
l
o
a
d
 
t
i
m
e
s
,
 
W
e
b
S
o
c
k
e
t
 
e
r
r
o
r
s
,
 
c
o
m
p
u
t
e
 
l
a
t
e
n
c
y


-
 
A
N
D
 
a
l
e
r
t
s
 
f
i
r
e
 
w
h
e
n
 
W
e
b
S
o
c
k
e
t
 
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
 
r
a
t
e
 
d
r
o
p
s
 
b
e
l
o
w
 
t
h
r
e
s
h
o
l
d




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
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p
 
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




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
i
n
t
e
g
r
a
t
e
 
w
i
t
h
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p
 
f
o
r
 
s
e
a
m
l
e
s
s
 
d
o
c
u
m
e
n
t


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
 
N
e
x
t
c
l
o
u
d
 
a
p
p
 
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


-
 
G
I
V
E
N
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p
 
i
n
s
t
a
l
l
e
d


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
i
n
c
l
u
d
e
s
 
C
r
y
p
t
P
a
d
 
i
n
 
F
i
l
e
 
M
a
n
a
g
e
r
 
(
`
.
c
r
y
p
t
p
a
d
-
d
i
a
g
r
a
m
`
 
f
i
l
e
s
)


-
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
a
p
p
 
u
s
e
s
 
C
r
y
p
t
P
a
d
 
O
I
D
C
 
t
o
 
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
 
a
c
c
e
s
s
 
t
o
 
d
o
c
u
m
e
n
t
s


-
 
A
N
D
 
C
r
y
p
t
P
a
d
 
d
o
e
s
 
n
o
t
 
e
n
f
o
r
c
e
 
i
t
s
 
o
w
n
 
I
g
 
l
o
g
i
n
 
(
s
e
s
s
i
o
n
s
 
d
e
l
e
g
a
t
e
d
 
t
o
 
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
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
p
r
o
m
i
s
e
s
 
s
e
c
u
r
i
t
y
 
t
h
r
o
u
g
h
 
r
e
s
t
r
i
c
t
i
n
g
 
d
e
f
a
u
l
t
 
u
s
e
r
 
g
r
o
u
p
s
 
v
i
a
 
g
r
o
u
p
 
p
o
l
i
c
y
 
(
r
e
s
t
r
i
c
t
i
o
n
 
n
o
t
 
d
o
c
u
m
e
n
t
e
d
:
 
w
o
r
k
i
n
g
 
a
s
s
u
m
p
t
i
o
n
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
 
D
o
c
u
m
e
n
t
 
s
h
a
r
i
n
g
 
a
n
d
 
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


-
 
G
I
V
E
N
 
a
 
C
r
y
p
t
P
a
d
 
d
o
c
u
m
e
n
t
 
c
r
e
a
t
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
s
h
a
r
e
s
 
t
h
e
 
d
o
c
u
m
e
n
t
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
s
h
a
r
e
 
m
e
c
h
a
n
i
s
m


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
s
h
a
r
e
 
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
 
(
r
e
a
d
/
w
r
i
t
e
/
a
d
m
i
n
)
 
m
a
p
 
t
o
 
C
r
y
p
t
P
a
d
 
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


-
 
A
N
D
 
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
o
r
s
 
w
i
t
h
 
w
r
i
t
e
 
a
c
c
e
s
s
 
c
a
n
 
e
d
i
t
 
t
h
e
 
d
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
c
u
r
r
e
n
t
l
y


-
 
A
N
D
 
s
h
a
r
e
 
e
x
p
i
r
a
t
i
o
n
 
d
a
t
e
s
 
a
r
e
 
e
n
f
o
r
c
e
d
 
b
y
 
N
e
x
t
c
l
o
u
d


-
 
A
N
D
 
e
x
t
e
r
n
a
l
 
r
e
c
i
p
i
e
n
t
s
 
(
v
i
a
 
e
m
a
i
l
)
 
r
e
c
e
i
v
e
 
i
n
v
i
t
a
t
i
o
n
 
w
i
t
h
 
N
e
x
t
c
l
o
u
d
 
s
h
a
r
e
 
l
i
n
k




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
 
F
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
 
a
n
d
 
b
a
c
k
u
p




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
r
e
l
y
 
o
n
 
N
e
x
t
c
l
o
u
d
 
f
o
r
 
d
o
c
u
m
e
n
t
 
s
t
o
r
a
g
e
 
a
n
d
 
b
a
c
k
u
p
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
 
N
e
x
t
c
l
o
u
d
 
S
3
 
s
t
o
r
a
g
e


-
 
G
I
V
E
N
 
e
n
c
r
y
p
t
e
d
 
C
r
y
p
t
P
a
d
 
d
o
c
u
m
e
n
t
s
 
s
t
o
r
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d


-
 
T
H
E
N
 
d
o
c
u
m
e
n
t
s
 
a
r
e
 
s
t
o
r
e
d
 
i
n
 
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
 
(
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
n
e
x
t
c
l
o
u
d
`
)


-
 
A
N
D
 
f
i
l
e
 
p
a
t
h
 
i
n
c
l
u
d
e
s
 
d
o
c
u
m
e
n
t
 
I
D
 
a
n
d
 
v
e
r
s
i
o
n


-
 
A
N
D
 
S
3
 
l
i
f
e
c
y
c
l
e
 
p
o
l
i
c
i
e
s
 
a
p
p
l
y
 
(
e
.
g
.
,
 
r
e
t
e
n
t
i
o
n
 
7
 
y
e
a
r
s
 
f
o
r
 
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
)


-
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
h
a
n
d
l
e
s
 
m
u
l
t
i
p
a
r
t
 
u
p
l
o
a
d
s
 
f
o
r
 
l
a
r
g
e
 
d
o
c
u
m
e
n
t
s
 
(
>
 
1
0
0
M
B
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
 
B
a
c
k
u
p
 
v
i
a
 
N
e
x
t
c
l
o
u
d


-
 
G
I
V
E
N
 
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
 
f
o
r
 
R
W
X
 
P
V
C
s


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
P
V
C
 
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
 
i
s
 
b
a
c
k
e
d
 
u
p
 
d
a
i
l
y
 
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
 
A
N
D
 
C
r
y
p
t
P
a
d
 
d
o
c
u
m
e
n
t
s
 
a
r
e
 
s
t
o
r
e
d
 
i
n
 
N
e
x
t
c
l
o
u
d
 
P
V
C
 
(
n
o
 
s
e
p
a
r
a
t
e
 
P
V
C
 
n
e
e
d
e
d
)


-
 
A
N
D
 
b
a
c
k
u
p
s
 
i
n
c
l
u
d
e
 
e
n
c
r
y
p
t
e
d
 
d
o
c
u
m
e
n
t
 
b
l
o
b
s
 
a
n
d
 
v
e
r
s
i
o
n
 
h
i
s
t
o
r
y


-
 
A
N
D
 
r
e
c
o
v
e
r
y
 
r
e
s
t
o
r
e
s
 
b
o
t
h
 
N
e
x
t
c
l
o
u
d
 
m
e
t
a
d
a
t
a
 
a
n
d
 
C
r
y
p
t
P
a
d
 
f
i
l
e
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
 
C
e
n
t
r
a
l
 
n
a
v
i
g
a
t
i
o
n
 
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




C
r
y
p
t
P
a
d
 
S
H
A
L
L
 
i
n
t
e
g
r
a
t
e
 
w
i
t
h
 
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
 
f
o
r
 
c
e
n
t
r
a
l
i
z
e
d
 
n
a
v
i
g
a
t
i
o
n
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
o
r
t
a
l
 
t
i
l
e
 
n
a
v
i
g
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
 
C
r
y
p
t
P
a
d
 
d
e
p
l
o
y
e
d


-
 
T
H
E
N
 
a
 
t
i
l
e
 
i
s
 
d
i
s
p
l
a
y
e
d
 
i
n
 
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
 
n
a
v
i
g
a
t
i
o
n
 
b
a
r


-
 
A
N
D
 
t
i
l
e
 
U
R
L
 
i
s
 
`
h
t
t
p
s
:
/
/
n
e
x
t
c
l
o
u
d
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
/
a
p
p
s
/
c
r
y
p
t
p
a
d
d
i
a
g
r
a
m
/
`


-
 
A
N
D
 
t
i
l
e
 
i
c
o
n
 
i
s
 
C
r
y
p
t
P
a
d
 
l
o
g
o
 
(
d
a
t
a
:
i
m
a
g
e
/
s
v
g
+
x
m
l
;
b
a
s
e
6
4
)


-
 
A
N
D
 
t
i
l
e
 
d
e
s
c
r
i
p
t
i
o
n
 
i
s
 
"
E
n
c
r
y
p
t
e
d
 
d
i
a
g
r
a
m
 
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
v
e
 
e
d
i
t
o
r
 
(
E
2
E
)
"


-
 
A
N
D
 
c
l
i
c
k
i
n
g
 
t
h
e
 
t
i
l
e
 
r
e
d
i
r
e
c
t
s
 
t
o
 
C
r
y
p
t
P
a
d
 
v
i
a
 
N
e
x
t
c
l
o
u
d
 
(
n
o
t
 
d
i
r
e
c
t
l
y
 
t
o
 
C
r
y
p
t
P
a
d
)






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
 
A
u
t
h
 
|
 
N
o
n
e
 
(
s
t
a
t
e
l
e
s
s
,
 
s
e
s
s
i
o
n
 
d
e
l
e
g
a
t
e
d
 
t
o
 
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
 
|


|
 
S
t
o
r
a
g
e
 
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
 
S
3
 
(
n
o
 
s
e
p
a
r
a
t
e
 
P
V
C
)
 
|


|
 
C
h
a
r
t
 
|
 
U
p
s
t
r
e
a
m
 
C
r
y
p
t
P
a
d
 
(
v
i
a
 
N
e
x
t
c
l
o
u
d
 
C
r
y
p
t
p
a
d
 
a
p
p
)
 
|


|
 
L
i
c
e
n
s
e
 
|
 
A
G
P
L
-
3
.
0
 
|


|
 
R
e
p
l
i
c
a
 
r
a
n
g
e
 
|
 
2
-
1
0
 
(
H
P
A
,
 
t
a
r
g
e
t
C
P
U
 
7
0
%
)
 
|


|
 
R
e
s
o
u
r
c
e
s
 
|
 
C
P
U
 
2
5
0
m
-
5
0
0
m
,
 
m
e
m
o
r
y
 
2
5
6
M
i
-
5
1
2
M
i
 
|


|
 
S
e
c
u
r
i
t
y
 
|
 
u
i
d
 
6
5
5
3
2
,
 
r
e
a
d
-
o
n
l
y
 
r
o
o
t
f
s
,
 
d
r
o
p
p
e
d
 
c
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
,
 
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
 
s
e
c
c
o
m
p
 
|


|
 
H
e
a
l
t
h
 
|
 
H
T
T
P
 
l
i
v
e
n
e
s
s
 
`
/
h
e
a
l
t
h
`
 
p
o
r
t
 
3
0
0
0
,
 
6
0
s
/
3
0
s


|
 
I
n
g
r
e
s
s
 
|
 
V
i
a
 
N
e
x
t
c
l
o
u
d
 
(
n
o
 
s
e
p
a
r
a
t
e
 
i
n
g
r
e
s
s
)
 
|




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
 
S
t
a
n
d
a
r
d
 
(
E
2
E
 
e
n
c
r
y
p
t
e
d
 
e
d
i
t
i
n
g
,
 
i
n
t
e
g
r
a
t
e
d
 
w
i
t
h
 
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
0
%
 
(
7
.
2
 
h
o
u
r
s
 
d
o
w
n
t
i
m
e
/
m
o
n
t
h
 
m
a
x
)
 
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
4
0
0
m
s
 
(
p
a
d
 
l
o
a
d
)
 
|
 
N
g
i
n
x
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
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
 
<
1
%
 
(
H
T
T
P
 
5
x
x
)
 
|
 
N
g
i
n
x
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|


|
 
*
*
E
2
E
 
E
n
c
r
y
p
t
i
o
n
*
*
 
|
 
1
0
0
%
 
(
s
e
r
v
e
r
 
c
a
n
n
o
t
 
r
e
a
d
 
c
o
n
t
e
n
t
)
 
|
 
A
r
c
h
i
t
e
c
t
u
r
e
 
g
u
a
r
a
n
t
e
e
 
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
 
C
r
y
p
t
P
a
d
 
5
x
x
 
e
r
r
o
r
 
r
a
t
e
 
>
2
%
 
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
d
i
s
 
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
 
f
a
i
l
u
r
e
s
 
>
3
 
i
n
 
5
 
m
i
n
u
t
e
s
 
→
 
P
2
 
a
l
e
r
t


-
 
N
e
x
t
c
l
o
u
d
 
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
 
f
a
i
l
u
r
e
s
 
>
3
 
i
n
 
5
 
m
i
n
u
t
e
s
 
→
 
P
2
 
a
l
e
r
t


-
 
D
i
s
k
 
u
s
a
g
e
 
>
8
5
%
 
→
 
P
3
 
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
 
5
0
0
 
c
o
n
c
u
r
r
e
n
t
 
u
s
e
r
s


-
 
1
,
0
0
0
 
a
c
t
i
v
e
 
p
a
d
s


-
 
5
,
0
0
0
 
p
a
d
 
o
p
e
r
a
t
i
o
n
s
 
p
e
r
 
h
o
u
r


-
 
D
a
t
a
b
a
s
e
:
 
1
 
G
B
 
(
t
y
p
i
c
a
l
)
,
 
1
0
 
G
B
 
(
l
a
r
g
e
 
i
n
s
t
i
t
u
t
i
o
n
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
 
S
t
a
n
d
a
r
d
 
(
R
P
O
:
 
4
 
h
o
u
r
s
,
 
R
T
O
:
 
8
 
h
o
u
r
s
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
*
*
 
(
R
e
d
i
s
)
:
 
D
a
i
l
y
 
s
n
a
p
s
h
o
t
 
(
p
a
d
 
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
 
*
*
C
e
p
h
F
S
 
s
t
o
r
a
g
e
*
*
:
 
D
a
i
l
y
 
s
n
a
p
s
h
o
t
 
(
p
a
d
 
d
a
t
a
)


-
 
*
*
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
*
*
:
 
G
i
t
O
p
s
-
m
a
n
a
g
e
d




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
d
i
s
 
d
a
t
a
b
a
s
e
 
r
e
s
t
o
r
e
 
-
 
1
0
 
m
i
n


2
.
 
C
e
p
h
F
S
 
s
t
o
r
a
g
e
 
r
e
s
t
o
r
e
 
-
 
1
5
 
m
i
n


3
.
 
C
r
y
p
t
P
a
d
 
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
 
-
 
1
0
 
m
i
n


4
.
 
N
e
x
t
c
l
o
u
d
 
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
 
v
e
r
i
f
i
c
a
t
i
o
n
 
-
 
5
 
m
i
n


5
.
 
O
I
D
C
 
c
l
i
e
n
t
 
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
 
v
e
r
i
f
i
c
a
t
i
o
n
 
-
 
5
 
m
i
n


6
.
 
S
m
o
k
e
 
t
e
s
t
s
 
(
c
r
e
a
t
e
 
p
a
d
,
 
e
d
i
t
,
 
E
2
E
 
e
n
c
r
y
p
t
i
o
n
 
v
e
r
i
f
y
)
 
-
 
1
0
 
m
i
n


7
.
 
U
s
e
r
 
a
c
c
e
s
s
 
r
e
s
t
o
r
a
t
i
o
n
 
-
 
1
5
 
m
i
n




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
 
D
a
t
a
*
*
:


-
 
P
a
d
 
m
e
t
a
d
a
t
a
 
(
s
t
o
r
e
d
 
i
n
 
R
e
d
i
s
)


-
 
P
a
d
 
d
a
t
a
 
(
s
t
o
r
e
d
 
i
n
 
C
e
p
h
F
S
,
 
E
2
E
 
e
n
c
r
y
p
t
e
d
)


-
 
O
I
D
C
 
c
l
i
e
n
t
 
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
R
e
d
i
s
 
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
 
s
n
a
p
s
h
o
t
,
 
v
e
r
i
f
y
 
p
a
d
 
m
e
t
a
d
a
t
a


-
 
*
*
C
e
p
h
F
S
 
s
t
o
r
a
g
e
 
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
 
s
n
a
p
s
h
o
t
,
 
v
e
r
i
f
y
 
E
2
E
 
e
n
c
r
y
p
t
i
o
n
 
i
n
t
e
g
r
i
t
y


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
 
b
r
o
k
e
n
*
*
:
 
V
e
r
i
f
y
 
W
O
P
I
/
N
e
x
t
c
l
o
u
d
 
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


-
 
*
*
C
o
m
p
l
e
t
e
 
f
a
i
l
u
r
e
*
*
:
 
R
e
d
e
p
l
o
y
 
f
r
o
m
 
G
i
t
O
p
s
,
 
r
e
s
t
o
r
e
 
R
e
d
i
s
 
+
 
C
e
p
h
F
S
,
 
v
e
r
i
f
y
 
N
e
x
t
c
l
o
u
d
 
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



