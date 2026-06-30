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
o
s
s
-
S
e
r
v
i
c
e
 
W
o
r
k
f
l
o
w
s




D
e
f
i
n
e
s
 
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
 
u
s
e
r
 
w
o
r
k
f
l
o
w
s
 
t
h
a
t
 
s
p
a
n
 
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
.
 
E
a
c
h
 
w
o
r
k
f
l
o
w


s
p
e
c
i
f
i
e
s
 
t
h
e
 
s
e
r
v
i
c
e
 
c
h
a
i
n
,
 
d
a
t
a
 
f
l
o
w
,
 
a
n
d
 
f
a
i
l
u
r
e
 
b
e
h
a
v
i
o
r
.




#
#
 
W
o
r
k
f
l
o
w
:
 
S
t
u
d
e
n
t
 
S
S
O
 
L
o
g
i
n
 
→
 
C
o
u
r
s
e
 
A
c
c
e
s
s




A
 
s
t
u
d
e
n
t
 
l
o
g
s
 
i
n
t
o
 
t
h
e
 
p
o
r
t
a
l
 
a
n
d
 
a
c
c
e
s
s
e
s
 
t
h
e
i
r
 
I
L
I
A
S
 
c
o
u
r
s
e
s
.




`
`
`


K
e
y
c
l
o
a
k
 
→
 
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
 
→
 
[
I
L
I
A
S
 
|
 
M
o
o
d
l
e
]


`
`
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
 
S
t
u
d
e
n
t
 
a
c
c
e
s
s
e
s
 
I
L
I
A
S
 
v
i
a
 
p
o
r
t
a
l


-
 
G
I
V
E
N
 
a
 
s
t
u
d
e
n
t
 
w
i
t
h
 
a
n
 
L
D
A
P
 
a
c
c
o
u
n
t


-
 
W
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
n
a
v
i
g
a
t
e
s
 
t
o
 
`
p
o
r
t
a
l
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
`


-
 
T
H
E
N
 
N
u
b
u
s
 
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
s
 
t
h
e
 
s
t
u
d
e
n
t
 
v
i
a
 
O
I
D
C
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k


-
 
A
N
D
 
t
h
e
 
p
o
r
t
a
l
 
t
i
l
e
 
f
o
r
 
I
L
I
A
S
 
i
s
 
v
i
s
i
b
l
e
 
(
S
A
M
L
-
a
u
t
h
o
r
i
z
e
d
 
g
r
o
u
p
)


-
 
W
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
c
l
i
c
k
s
 
t
h
e
 
I
L
I
A
S
 
t
i
l
e


-
 
T
H
E
N
 
I
L
I
A
S
 
p
e
r
f
o
r
m
s
 
S
A
M
L
 
S
P
-
i
n
i
t
i
a
t
e
d
 
S
S
O
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k
 
(
s
i
l
e
n
t
 
l
o
g
i
n
 
v
i
a
 
I
n
t
e
r
c
o
m
)


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
a
c
c
e
s
s
e
s
 
t
h
e
i
r
 
e
n
r
o
l
l
e
d
 
c
o
u
r
s
e
s


-
 
A
N
D
 
n
o
 
r
e
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
i
o
n
 
p
r
o
m
p
t
 
i
s
 
s
h
o
w
n




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
u
d
e
n
t
 
a
c
c
e
s
s
e
s
 
M
o
o
d
l
e
 
v
i
a
 
p
o
r
t
a
l


-
 
G
I
V
E
N
 
t
h
e
 
s
a
m
e
 
s
t
u
d
e
n
t


-
 
W
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
c
l
i
c
k
s
 
t
h
e
 
M
o
o
d
l
e
 
t
i
l
e


-
 
T
H
E
N
 
M
o
o
d
l
e
 
p
e
r
f
o
r
m
s
 
S
h
i
b
b
o
l
e
t
h
 
S
P
-
i
n
i
t
i
a
t
e
d
 
S
S
O
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
a
c
c
e
s
s
e
s
 
t
h
e
i
r
 
M
o
o
d
l
e
 
c
o
u
r
s
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
 
K
e
y
c
l
o
a
k
 
u
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


-
 
G
I
V
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
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
 
l
o
g
 
i
n


-
 
W
H
E
N
 
K
e
y
c
l
o
a
k
 
i
s
 
n
o
t
 
r
e
s
p
o
n
d
i
n
g


-
 
T
H
E
N
 
t
h
e
 
p
o
r
t
a
l
 
r
e
t
u
r
n
s
 
a
n
 
e
r
r
o
r


-
 
A
N
D
 
n
o
 
s
e
r
v
i
c
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
 
(
a
l
l
 
d
e
p
e
n
d
 
o
n
 
K
e
y
c
l
o
a
k
 
f
o
r
 
a
u
t
h
)




#
#
 
W
o
r
k
f
l
o
w
:
 
I
n
s
t
r
u
c
t
o
r
 
U
p
l
o
a
d
s
 
C
o
u
r
s
e
 
M
a
t
e
r
i
a
l
 
t
o
 
I
L
I
A
S




A
n
 
i
n
s
t
r
u
c
t
o
r
 
u
p
l
o
a
d
s
 
f
i
l
e
s
 
t
h
a
t
 
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
 
S
3
/
M
i
n
I
O
,
 
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
 
I
L
I
A
S
.




`
`
`


I
n
s
t
r
u
c
t
o
r
 
→
 
I
L
I
A
S
 
→
 
S
3
 
(
M
i
n
I
O
)


`
`
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
 
t
o
 
I
L
I
A
S
 
w
i
t
h
 
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
 
a
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
 
i
n
s
t
r
u
c
t
o
r
 
i
n
 
I
L
I
A
S


-
 
W
H
E
N
 
t
h
e
 
i
n
s
t
r
u
c
t
o
r
 
u
p
l
o
a
d
s
 
a
 
P
D
F
 
t
o
 
a
n
 
I
L
I
A
S
 
c
o
u
r
s
e


-
 
T
H
E
N
 
I
L
I
A
S
 
s
t
o
r
e
s
 
t
h
e
 
f
i
l
e
 
i
n
 
t
h
e
 
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
 
S
3
 
b
u
c
k
e
t


-
 
A
N
D
 
t
h
e
 
f
i
l
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
 
t
o
 
e
n
r
o
l
l
e
d
 
s
t
u
d
e
n
t
s


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
s
u
r
v
i
v
e
s
 
p
o
d
 
e
v
i
c
t
i
o
n
 
(
s
t
o
r
e
d
 
i
n
 
S
3
,
 
n
o
t
 
l
o
c
a
l
 
P
V
C
)




#
#
 
W
o
r
k
f
l
o
w
:
 
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
 
O
p
e
n
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
 
F
i
l
e
p
i
c
k
e
r




A
n
 
O
X
 
u
s
e
r
 
s
e
l
e
c
t
s
 
a
 
f
i
l
e
 
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
 
w
h
i
l
e
 
c
o
m
p
o
s
i
n
g
 
a
n
 
e
m
a
i
l
.




`
`
`


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
 
→
 
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
 
→
 
K
e
y
c
l
o
a
k
 
(
s
i
l
e
n
t
 
l
o
g
i
n
)
 
→
 
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
 
A
P
I
 
→
 
S
3


`
`
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
 
F
i
l
e
p
i
c
k
e
r
 
c
r
o
s
s
-
a
p
p
 
w
o
r
k
f
l
o
w


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
 
i
n
 
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
 
"
A
t
t
a
c
h
 
f
i
l
e
"
 
i
n
 
e
m
a
i
l
 
c
o
m
p
o
s
e


-
 
T
H
E
N
 
t
h
e
 
F
i
l
e
p
i
c
k
e
r
 
o
p
e
n
s
,
 
c
a
l
l
i
n
g
 
t
h
e
 
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


-
 
A
N
D
 
I
n
t
e
r
c
o
m
 
p
e
r
f
o
r
m
s
 
s
i
l
e
n
t
 
l
o
g
i
n
 
t
o
 
K
e
y
c
l
o
a
k
 
f
o
r
 
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
 
t
o
k
e
n


-
 
A
N
D
 
t
h
e
 
F
i
l
e
p
i
c
k
e
r
 
d
i
s
p
l
a
y
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
i
l
e
s
 
v
i
a
 
W
e
b
D
A
V
 
A
P
I


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
e
l
e
c
t
s
 
a
 
f
i
l
e


-
 
T
H
E
N
 
t
h
e
 
f
i
l
e
 
r
e
f
e
r
e
n
c
e
 
i
s
 
a
t
t
a
c
h
e
d
 
t
o
 
t
h
e
 
e
m
a
i
l
 
(
N
O
T
 
d
u
p
l
i
c
a
t
e
d
)


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
r
e
m
a
i
n
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
'
s
 
S
3
 
b
u
c
k
e
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
 
u
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
 
u
s
e
 
t
h
e
 
F
i
l
e
p
i
c
k
e
r


-
 
W
H
E
N
 
t
h
e
 
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
 
i
s
 
d
o
w
n


-
 
T
H
E
N
 
t
h
e
 
F
i
l
e
p
i
c
k
e
r
 
f
a
i
l
s
 
t
o
 
l
o
a
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
 
f
i
l
e
s


-
 
A
N
D
 
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
 
r
e
m
a
i
n
s
 
f
u
n
c
t
i
o
n
a
l
 
f
o
r
 
n
o
n
-
F
i
l
e
p
i
c
k
e
r
 
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




#
#
 
W
o
r
k
f
l
o
w
:
 
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
 
P
r
o
j
e
c
t
 
F
i
l
e
 
S
t
o
r
a
g
e




A
 
p
r
o
j
e
c
t
 
m
a
n
a
g
e
r
 
e
n
a
b
l
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
 
f
o
r
 
a
n
 
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
 
p
r
o
j
e
c
t
.




`
`
`


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
 
↔
 
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
v
i
a
 
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
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
)


`
`
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
 
E
n
a
b
l
e
 
f
i
l
e
 
s
t
o
r
e
 
p
e
r
 
p
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
 
b
o
t
h
 
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
 
a
n
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
 
d
e
p
l
o
y
e
d


-
 
A
N
D
 
t
h
e
 
b
o
o
t
s
t
r
a
p
 
j
o
b
 
h
a
s
 
e
s
t
a
b
l
i
s
h
e
d
 
t
r
u
s
t


-
 
W
H
E
N
 
a
 
p
r
o
j
e
c
t
 
a
d
m
i
n
 
e
n
a
b
l
e
s
 
t
h
e
 
f
i
l
e
 
s
t
o
r
e
 
i
n
 
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
t
t
i
n
g
s


-
 
T
H
E
N
 
p
r
o
j
e
c
t
 
m
e
m
b
e
r
s
 
c
a
n
 
b
r
o
w
s
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
 
f
o
l
d
e
r
s
 
f
r
o
m
 
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
 
w
o
r
k
 
p
a
c
k
a
g
e
s


-
 
A
N
D
 
a
t
t
a
c
h
i
n
g
 
a
 
f
i
l
e
 
c
r
e
a
t
e
s
 
a
 
r
e
f
e
r
e
n
c
e
 
(
n
o
t
 
a
 
c
o
p
y
)
 
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
 
A
N
D
 
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
 
f
o
l
l
o
w
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
'
s
 
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
 
W
o
r
k
f
l
o
w
:
 
S
e
m
e
s
t
e
r
 
C
o
u
r
s
e
 
P
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




C
o
u
r
s
e
 
c
r
e
a
t
i
o
n
 
a
n
d
 
e
n
r
o
l
l
m
e
n
t
 
s
y
n
c
 
f
r
o
m
 
c
a
m
p
u
s
 
s
y
s
t
e
m
 
t
o
 
L
M
S
.




`
`
`


H
I
S
i
n
O
n
e
 
w
e
b
h
o
o
k
 
→
 
P
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
 
A
P
I
 
→
 
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
 
→
 
K
e
y
c
l
o
a
k
 
(
L
D
A
P
 
s
y
n
c
)


`
`
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
w
 
s
e
m
e
s
t
e
r
 
c
o
u
r
s
e
 
c
r
e
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
 
t
h
e
 
s
e
m
e
s
t
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
 
A
P
I
 
i
s
 
t
r
i
g
g
e
r
e
d


-
 
W
H
E
N
 
n
e
w
 
c
o
u
r
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
 
i
n
 
H
I
S
i
n
O
n
e


-
 
T
H
E
N
 
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
 
c
r
e
a
t
e
s
 
m
a
t
c
h
i
n
g
 
c
o
u
r
s
e
s
 
i
n
 
I
L
I
A
S
 
a
n
d
 
M
o
o
d
l
e


-
 
A
N
D
 
e
n
r
o
l
l
e
d
 
s
t
u
d
e
n
t
s
 
a
r
e
 
s
y
n
c
e
d
 
t
o
 
c
o
u
r
s
e
 
r
o
s
t
e
r
s


-
 
A
N
D
 
s
t
u
d
e
n
t
 
a
c
c
o
u
n
t
s
 
a
r
e
 
v
e
r
i
f
i
e
d
 
i
n
 
K
e
y
c
l
o
a
k
/
L
D
A
P




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
u
d
e
n
t
 
d
r
o
p
s
 
c
o
u
r
s
e


-
 
G
I
V
E
N
 
a
 
s
t
u
d
e
n
t
 
w
h
o
 
d
r
o
p
s
 
a
 
c
o
u
r
s
e
 
i
n
 
H
I
S
i
n
O
n
e


-
 
W
H
E
N
 
t
h
e
 
d
i
s
e
n
r
o
l
l
m
e
n
t
 
w
e
b
h
o
o
k
 
f
i
r
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
 
s
t
u
d
e
n
t
 
i
s
 
r
e
m
o
v
e
d
 
f
r
o
m
 
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
 
c
o
u
r
s
e
 
r
o
s
t
e
r
s


-
 
A
N
D
 
a
c
c
e
s
s
 
t
o
 
c
o
u
r
s
e
 
m
a
t
e
r
i
a
l
s
 
i
s
 
i
m
m
e
d
i
a
t
e
l
y
 
r
e
v
o
k
e
d




#
#
 
W
o
r
k
f
l
o
w
:
 
H
e
l
p
d
e
s
k
 
T
i
c
k
e
t
 
w
i
t
h
 
F
i
l
e
 
A
t
t
a
c
h
m
e
n
t




A
 
u
s
e
r
 
s
u
b
m
i
t
s
 
a
 
Z
a
m
m
a
d
 
t
i
c
k
e
t
 
w
i
t
h
 
a
 
f
i
l
e
 
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
.




`
`
`


Z
a
m
m
a
d
 
→
 
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
 
→
 
K
e
y
c
l
o
a
k
 
→
 
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
W
e
b
D
A
V
)
 
→
 
S
3


`
`
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
 
T
i
c
k
e
t
 
w
i
t
h
 
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


-
 
G
I
V
E
N
 
a
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
 
o
p
e
n
i
n
g
 
Z
a
m
m
a
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
t
t
a
c
h
e
s
 
a
 
f
i
l
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


-
 
T
H
E
N
 
Z
a
m
m
a
d
 
a
c
c
e
s
s
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
 
I
n
t
e
r
c
o
m
-
m
e
d
i
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
 
A
P
I


-
 
A
N
D
 
t
h
e
 
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
 
i
s
 
s
e
n
t
 
v
i
a
 
S
M
T
P
 
r
e
l
a
y


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
r
e
f
e
r
e
n
c
e
 
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
 
i
n
 
Z
a
m
m
a
d
'
s
 
s
t
o
r
a
g
e




#
#
 
W
o
r
k
f
l
o
w
:
 
R
e
a
l
-
T
i
m
e
 
C
h
a
t
 
w
i
t
h
 
F
i
l
e
 
S
h
a
r
i
n
g




A
 
s
t
u
d
e
n
t
 
s
h
a
r
e
s
 
a
 
f
i
l
e
 
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
 
d
u
r
i
n
g
 
a
n
 
E
l
e
m
e
n
t
 
c
h
a
t
.




`
`
`


E
l
e
m
e
n
t
 
→
 
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
 
→
 
K
e
y
c
l
o
a
k
 
→
 
N
e
x
t
c
l
o
u
d
 
→
 
S
3


`
`
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
 
S
h
a
r
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
 
f
i
l
e
 
i
n
 
c
h
a
t


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
 
i
n
 
a
n
 
E
l
e
m
e
n
t
 
c
h
a
t
 
r
o
o
m


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
e
l
e
c
t
s
 
"
S
h
a
r
e
 
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
"


-
 
T
H
E
N
 
E
l
e
m
e
n
t
 
c
a
l
l
s
 
I
n
t
e
r
c
o
m
 
t
o
 
g
e
t
 
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
 
t
o
k
e
n


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
b
r
o
w
s
e
r
 
s
h
o
w
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
i
l
e
s


-
 
W
H
E
N
 
a
 
f
i
l
e
 
i
s
 
s
h
a
r
e
d


-
 
T
H
E
N
 
E
l
e
m
e
n
t
 
s
e
n
d
s
 
t
h
e
 
f
i
l
e
 
r
e
f
e
r
e
n
c
e
 
(
n
o
t
 
a
 
c
o
p
y
)
 
t
o
 
c
h
a
t
 
p
a
r
t
i
c
i
p
a
n
t
s


-
 
A
N
D
 
p
a
r
t
i
c
i
p
a
n
t
s
 
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
 
a
c
c
e
s
s
 
c
a
n
 
o
p
e
n
 
t
h
e
 
o
r
i
g
i
n
a
l
 
f
i
l
e




#
#
 
W
o
r
k
f
l
o
w
:
 
P
o
r
t
a
l
 
N
e
w
s
f
e
e
d




X
W
i
k
i
 
b
l
o
g
 
e
n
t
r
i
e
s
 
a
p
p
e
a
r
 
i
n
 
t
h
e
 
N
u
b
u
s
 
p
o
r
t
a
l
 
n
e
w
s
f
e
e
d
.




`
`
`


X
W
i
k
i
 
→
 
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
 
→
 
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
 
(
s
i
l
e
n
t
 
l
o
g
i
n
)


`
`
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
w
s
f
e
e
d
 
d
i
s
p
l
a
y
s
 
X
W
i
k
i
 
p
o
s
t
s


-
 
G
I
V
E
N
 
X
W
i
k
i
 
b
l
o
g
 
e
n
t
r
i
e
s
 
p
u
b
l
i
s
h
e
d


-
 
W
H
E
N
 
t
h
e
 
p
o
r
t
a
l
 
r
e
n
d
e
r
s
 
t
h
e
 
n
e
w
s
f
e
e
d
 
s
e
c
t
i
o
n


-
 
T
H
E
N
 
I
n
t
e
r
c
o
m
 
c
a
l
l
s
 
X
W
i
k
i
 
v
i
a
 
s
i
l
e
n
t
 
l
o
g
i
n


-
 
A
N
D
 
b
l
o
g
 
e
n
t
r
i
e
s
 
a
r
e
 
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
 
t
h
e
 
p
o
r
t
a
l
 
n
e
w
s
f
e
e
d


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
 
a
 
p
o
s
t
 
o
p
e
n
s
 
X
W
i
k
i
 
(
w
i
t
h
 
s
i
l
e
n
t
 
a
u
t
h
,
 
n
o
 
l
o
g
i
n
 
p
r
o
m
p
t
)




#
#
 
W
o
r
k
f
l
o
w
:
 
G
r
o
u
p
-
B
a
s
e
d
 
A
c
c
e
s
s
 
A
c
r
o
s
s
 
S
e
r
v
i
c
e
s




A
n
 
L
D
A
P
 
g
r
o
u
p
 
c
h
a
n
g
e
 
p
r
o
p
a
g
a
t
e
s
 
t
o
 
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
.




`
`
`


O
p
e
n
L
D
A
P
 
→
 
K
e
y
c
l
o
a
k
 
→
 
[
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
 
I
L
I
A
S
,
 
M
o
o
d
l
e
,
 
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
]


`
`
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
 
U
s
e
r
 
a
d
d
e
d
 
t
o
 
O
X
-
a
u
t
h
o
r
i
z
e
d
 
g
r
o
u
p


-
 
G
I
V
E
N
 
a
n
 
a
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
 
a
d
d
i
n
g
 
a
 
u
s
e
r
 
t
o
 
a
n
 
O
X
-
a
u
t
h
o
r
i
z
e
d
 
L
D
A
P
 
g
r
o
u
p


-
 
W
H
E
N
 
t
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
p
r
o
c
e
s
s
e
s
 
t
h
e
 
c
h
a
n
g
e


-
 
T
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
 
g
a
i
n
s
 
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
 
a
c
c
e
s
s


-
 
A
N
D
 
t
h
e
 
u
s
e
r
 
a
p
p
e
a
r
s
 
i
n
 
O
X
 
a
d
d
r
e
s
s
 
b
o
o
k


-
 
A
N
D
 
m
a
i
l
 
d
e
l
i
v
e
r
y
 
i
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
 
t
h
e
 
u
s
e
r




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
 
g
r
o
u
p
 
s
y
n
c


-
 
G
I
V
E
N
 
u
s
e
r
s
 
w
h
o
 
a
r
e
 
d
i
r
e
c
t
 
m
e
m
b
e
r
s
 
o
f
 
X
W
i
k
i
-
a
u
t
h
o
r
i
z
e
d
 
L
D
A
P
 
g
r
o
u
p
s


-
 
W
H
E
N
 
t
h
e
 
n
i
g
h
t
l
y
 
X
W
i
k
i
 
L
D
A
P
 
s
y
n
c
 
j
o
b
 
r
u
n
s


-
 
T
H
E
N
 
t
h
o
s
e
 
u
s
e
r
s
 
a
r
e
 
i
m
p
o
r
t
e
d
 
i
n
t
o
 
X
W
i
k
i


-
 
A
N
D
 
g
a
i
n
 
w
i
k
i
 
a
c
c
e
s
s
 
w
i
t
h
o
u
t
 
m
a
n
u
a
l
 
i
n
t
e
r
v
e
n
t
i
o
n




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
 
K
e
y
c
l
o
a
k
 
(
O
I
D
C
/
S
A
M
L
 
f
o
r
 
a
l
l
 
S
S
O
 
f
l
o
w
s
)


-
 
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
 
(
p
o
r
t
a
l
 
t
i
l
e
s
 
a
n
d
 
I
n
t
e
r
c
o
m
 
s
i
l
e
n
t
 
l
o
g
i
n
)


-
 
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
 
(
c
r
o
s
s
-
a
p
p
 
t
o
k
e
n
 
r
e
l
a
y
)


-
 
O
p
e
n
L
D
A
P
 
(
u
s
e
r
/
g
r
o
u
p
 
d
i
r
e
c
t
o
r
y
 
s
o
u
r
c
e
)


-
 
[
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
]
(
.
.
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
)
 
(
H
T
T
P
-
l
e
v
e
l
 
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
 
d
e
t
a
i
l
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
 
i
n
 
`
.
.
/
s
e
r
v
i
c
e
s
/
`
 
(
e
a
c
h
 
p
r
o
v
i
d
e
s
 
a
n
 
S
S
O
 
e
n
t
r
y
 
p
o
i
n
t
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
-
m
a
t
r
i
x
/
`
 
(
s
e
r
v
i
c
e
 
d
e
p
e
n
d
e
n
c
y
 
m
a
p
)

