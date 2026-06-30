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
 
E
t
h
e
r
p
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




R
e
a
l
-
t
i
m
e
 
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
o
r
 
f
o
r
 
m
e
e
t
i
n
g
 
n
o
t
e
s
,
 
w
o
r
k
s
h
o
p
s
,
 
a
n
d
 
l
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
 
s
e
s
s
i
o
n
s
.
 
U
s
e
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
 
t
r
a
n
s
f
o
r
m
 
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
 
f
o
r
 
c
o
n
f
l
i
c
t
-
f
r
e
e


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
i
n
g
.
 
A
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
 
v
i
a
 
O
I
D
C
 
w
i
t
h
 
e
m
b
e
d
d
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
 
f
o
r
 
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
 
a
n
d
 
c
o
n
t
e
n
t
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
 
R
e
a
l
-
t
i
m
e
 
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
 
t
e
x
t
 
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
 
O
T
 
a
l
g
o
r
i
t
h
m
,
 
O
I
D
C
 
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
 
b
a
c
k
e
n
d
 
f
o
r
 
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
/
c
o
n
t
e
n
t
,
 
M
a
r
k
d
o
w
n
 
s
u
p
p
o
r
t
 
w
i
t
h
 
l
i
m
i
t
e
d
 
f
o
r
m
a
t
t
i
n
g


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
 
p
l
a
t
f
o
r
m
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
,
 
H
e
d
g
e
D
o
c
,
 
e
t
c
.
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
 
e
d
i
t
i
n
g
 
b
e
y
o
n
d
 
M
a
r
k
d
o
w
n
 
(
E
t
h
e
r
p
a
d
 
s
u
p
p
o
r
t
s
 
l
i
m
i
t
e
d
 
f
o
r
m
a
t
t
i
n
g
)
,
 
v
e
r
s
i
o
n
 
c
o
n
t
r
o
l
 
(
p
a
d
 
h
i
s
t
o
r
y
 
o
n
l
y
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
 
p
l
a
t
f
o
r
m
s
 
(
u
s
e
 
C
r
y
p
t
P
a
d
,
 
H
e
d
g
e
D
o
c
,
 
e
t
c
.
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
 
e
d
i
t
i
n
g
 
b
e
y
o
n
d
 
M
a
r
k
d
o
w
n
 
(
E
t
h
e
r
p
a
d
 
s
u
p
p
o
r
t
s
 
l
i
m
i
t
e
d
 
f
o
r
m
a
t
t
i
n
g
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
e
a
l
-
t
i
m
e
 
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
 
v
i
a
 
O
T




E
t
h
e
r
p
a
d
 
S
H
A
L
L
 
u
s
e
 
t
h
e
 
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
 
t
o
 
e
n
a
b
l
e
 
m
u
l
t
i
p
l
e


u
s
e
r
s
 
t
o
 
e
d
i
t
 
t
h
e
 
s
a
m
e
 
p
a
d
 
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
 
w
i
t
h
o
u
t
 
c
o
n
f
l
i
c
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
 
t
w
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
 
u
s
e
r
s
 
a
c
c
e
s
s
i
n
g
 
t
h
e
 
s
a
m
e
 
p
a
d
 
U
R
L
 
(
`
/
p
/
n
o
t
e
s
-
x
y
z
`
)


-
 
W
H
E
N
 
b
o
t
h
 
u
s
e
r
s
 
t
y
p
e
 
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
p
p
e
a
r
 
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
E
t
h
e
r
p
a
d
'
s
 
N
o
d
e
.
j
s
 
b
a
c
k
e
n
d
)


-
 
A
N
D
 
t
h
e
 
O
T
 
a
l
g
o
r
i
t
h
m
 
m
e
r
g
e
s
 
e
d
i
t
s
 
w
i
t
h
o
u
t
 
c
o
n
f
l
i
c
t


-
 
A
N
D
 
n
o
 
m
a
n
u
a
l
 
c
o
n
f
l
i
c
t
 
r
e
s
o
l
u
t
i
o
n
 
i
s
 
n
e
e
d
e
d
 
b
y
 
u
s
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
 
C
u
r
s
o
r
 
t
r
a
c
k
i
n
g


-
 
G
I
V
E
N
 
m
u
l
t
i
p
l
e
 
u
s
e
r
s
 
i
n
 
a
 
p
a
d


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
 
m
o
v
e
 
t
h
e
i
r
 
c
u
r
s
o
r
s


-
 
T
H
E
N
 
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
h
o
w
n
 
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
 
t
o
 
a
l
l
 
u
s
e
r
s


-
 
A
N
D
 
u
s
e
r
 
n
a
m
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
 
n
e
a
r
 
e
a
c
h
 
c
u
r
s
o
r




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
 
O
I
D
C
 
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
 
K
e
y
c
l
o
a
k




E
t
h
e
r
p
a
d
 
S
H
A
L
L
 
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
 
v
i
a
 
O
I
D
C
 
w
i
t
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
u
s
i
n
g
 
t
h
e
 
`
e
p
_
e
t
h
e
r
p
a
d
_
o
a
u
t
h
2
`


o
r
 
s
i
m
i
l
a
r
 
p
l
u
g
i
n
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
 
O
I
D
C
 
l
o
g
i
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
 
n
a
v
i
g
a
t
i
n
g
 
t
o
 
E
t
h
e
r
p
a
d


-
 
W
H
E
N
 
E
t
h
e
r
p
a
d
'
s
 
O
A
u
t
h
2
 
p
l
u
g
i
n
 
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
 
w
i
t
h
 
K
e
y
c
l
o
a
k
 
S
S
O


-
 
T
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
 
r
e
t
u
r
n
s
 
a
n
 
O
I
D
C
 
a
c
c
e
s
s
 
t
o
k
e
n


-
 
A
N
D
 
E
t
h
e
r
p
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
 
l
o
c
a
l
 
u
s
e
r
 
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
 
(
i
f
 
f
i
r
s
t
 
l
o
g
i
n
)


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
 
i
s
 
l
o
g
g
e
d
 
i
n
 
a
n
d
 
p
a
d
s
 
a
r
e
 
a
t
t
r
i
b
u
t
e
d
 
t
o
 
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
 
A
n
o
n
y
m
o
u
s
 
r
e
a
d
-
o
n
l
y
 
a
c
c
e
s
s
 
(
o
p
t
i
o
n
a
l
)


-
 
G
I
V
E
N
 
a
n
 
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
 
a
c
c
e
s
s
i
n
g
 
a
 
p
a
d
 
(
n
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
i
o
n
)


-
 
W
H
E
N
 
p
a
d
 
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
 
p
u
b
l
i
c
 
r
e
a
d


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
 
c
a
n
 
v
i
e
w
 
t
h
e
 
p
a
d
 
r
e
a
d
-
o
n
l
y


-
 
A
N
D
 
c
a
n
n
o
t
 
e
d
i
t
 
w
i
t
h
o
u
t
 
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
 
P
e
r
s
i
s
t
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
 
s
t
o
r
a
g
e
 
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




E
t
h
e
r
p
a
d
 
S
H
A
L
L
 
s
t
o
r
e
 
a
l
l
 
p
a
d
 
c
o
n
t
e
n
t
,
 
m
e
t
a
d
a
t
a
,
 
a
n
d
 
r
e
v
i
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
 
(
N
O
T


b
l
o
b
 
s
t
o
r
a
g
e
)
.




P
a
d
 
c
o
n
t
e
n
t
 
i
s
 
s
t
o
r
e
d
 
a
s
 
p
l
a
i
n
 
t
e
x
t
 
(
M
a
r
k
d
o
w
n
-
i
s
h
)
 
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
a
d
 
c
o
n
t
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


-
 
G
I
V
E
N
 
a
n
 
E
t
h
e
r
p
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
 
a
 
u
s
e
r
 
c
r
e
a
t
e
s
 
a
 
p
a
d
 
a
n
d
 
t
y
p
e
s
 
c
o
n
t
e
n
t


-
 
T
H
E
N
 
c
o
n
t
e
n
t
 
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
 
t
h
e
 
`
e
t
h
e
r
p
a
d
`
 
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
 
D
B


-
 
A
N
D
 
p
e
r
s
i
s
t
s
 
a
c
r
o
s
s
 
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
,
 
u
p
g
r
a
d
e
s
,
 
a
n
d
 
d
a
t
a
b
a
s
e
 
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


-
 
A
N
D
 
p
a
d
 
r
e
v
i
s
i
o
n
s
 
a
r
e
 
k
e
p
t
 
f
o
r
 
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
 
P
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
 
a
n
d
 
s
h
a
r
i
n
g




E
t
h
e
r
p
a
d
 
u
s
e
r
s
 
S
H
A
L
L
 
c
r
e
a
t
e
 
n
e
w
 
p
a
d
s
 
w
i
t
h
 
a
u
t
o
-
g
e
n
e
r
a
t
e
d
 
U
R
L
s
 
(
`
/
p
/
g
e
n
e
r
a
t
e
d
-
i
d
`
)


a
n
d
 
s
h
a
r
e
 
t
h
e
m
 
v
i
a
 
U
R
L
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
r
e
a
t
e
s
 
a
 
n
e
w
 
p
a
d


-
 
T
H
E
N
 
a
 
u
n
i
q
u
e
 
p
a
d
 
I
D
 
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


-
 
A
N
D
 
t
h
e
 
p
a
d
 
U
R
L
 
i
s
 
`
/
p
/
{
p
a
d
-
i
d
}
`
 
(
e
.
g
.
,
 
`
/
p
/
n
o
t
e
s
-
a
b
c
1
2
3
`
)


-
 
A
N
D
 
t
h
e
 
p
a
d
 
i
s
 
i
n
i
t
i
a
l
l
y
 
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
 
b
y
 
t
h
e
 
c
r
e
a
t
o
r
 
(
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
 
m
o
d
e
l
 
i
s
 
p
e
r
-
p
a
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
 
P
a
d
 
s
h
a
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
 
a
n
 
e
x
i
s
t
i
n
g
 
p
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
 
c
r
e
a
t
o
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
 
p
a
d
 
U
R
L
 
(
`
/
p
/
n
o
t
e
s
-
a
b
c
1
2
3
`
)


-
 
T
H
E
N
 
a
n
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
 
w
i
t
h
 
t
h
e
 
U
R
L
 
c
a
n
 
a
c
c
e
s
s
 
t
h
e
 
p
a
d


-
 
A
N
D
 
p
a
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
 
a
r
e
 
l
i
m
i
t
e
d
 
t
o
 
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
 
(
n
o
 
g
r
a
n
u
l
a
r
 
A
C
L
 
i
n
 
o
p
e
n
-
s
o
u
r
c
e
 
E
t
h
e
r
p
a
d
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
 
M
a
r
k
d
o
w
n
 
f
o
r
m
a
t
t
i
n
g




E
t
h
e
r
p
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
 
l
i
m
i
t
e
d
 
M
a
r
k
d
o
w
n
-
s
t
y
l
e
 
f
o
r
m
a
t
t
i
n
g
:


-
 
H
e
a
d
i
n
g
s
 
(
`
#
 
H
1
`
,
 
`
#
#
 
H
2
`
)


-
 
B
o
l
d
 
(
`
*
*
b
o
l
d
*
*
`
)
,
 
i
t
a
l
i
c
 
(
`
*
i
t
a
l
i
c
*
`
)


-
 
L
i
s
t
s
 
(
o
r
d
e
r
e
d
 
`
1
.
`
,
 
u
n
o
r
d
e
r
e
d
 
`
-
`
)


-
 
L
i
n
k
s
 
(
`
[
t
e
x
t
]
(
u
r
l
)
`
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
 
R
i
c
h
 
t
e
x
t
 
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
 
u
s
e
r
 
e
d
i
t
i
n
g
 
a
 
p
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
 
f
o
r
m
a
t
s
 
t
e
x
t
 
u
s
i
n
g
 
E
t
h
e
r
p
a
d
'
s
 
t
o
o
l
b
a
r


-
 
T
H
E
N
 
M
a
r
k
d
o
w
n
-
s
t
y
l
e
 
f
o
r
m
a
t
t
i
n
g
 
i
s
 
a
p
p
l
i
e
d
 
(
s
t
o
r
e
d
 
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


-
 
A
N
D
 
r
e
n
d
e
r
e
d
 
i
n
 
t
h
e
 
p
a
d
 
e
d
i
t
o
r




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
 
E
t
h
e
r
p
a
d
 
W
e
b
 
|
 
N
o
d
e
.
j
s
 
b
a
c
k
e
n
d
 
(
E
x
p
r
e
s
s
)
 
+
 
f
r
o
n
t
e
n
d
 
|
 
1
 
|
 
R
W
O
 
P
V
C
 
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
 
d
a
t
a
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
 
|
 
P
a
d
 
c
o
n
t
e
n
t
 
a
n
d
 
m
e
t
a
d
a
t
a
 
s
t
o
r
a
g
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
 
(
1
0
G
i
)
 
|


|
 
C
h
a
r
t
 
|
 
`
h
e
l
m
f
i
l
e
/
c
h
a
r
t
s
/
e
t
h
e
r
p
a
d
/
`
 
(
l
o
c
a
l
 
c
h
a
r
t
)
 
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
 
E
t
h
e
r
p
a
d
 
W
e
b
 
|
 
1
0
0
1
 
(
n
o
d
e
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
e
t
h
e
r
p
a
d
`
 
(
i
f
 
u
s
i
n
g
 
O
A
u
t
h
2
 
p
l
u
g
i
n
)
 
|


|
 
O
I
D
C
 
s
c
o
p
e
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
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
 
d
a
t
a
b
a
s
e
 
|
 
`
e
t
h
e
r
p
a
d
`
 
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
 
u
s
e
r
 
|
 
`
e
t
h
e
r
p
a
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
 
(
p
o
s
t
g
r
e
s
 
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
 
W
e
b
 
p
o
r
t
 
|
 
9
0
0
1
 
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




-
 
*
*
E
m
b
e
d
d
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
*
*
:
 
T
h
e
 
E
t
h
e
r
p
a
d
 
c
h
a
r
t
 
i
n
c
l
u
d
e
s
 
a
n
 
e
m
b
e
d
d
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
N
O
T
 
t
h
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
 
c
l
u
s
t
e
r
)
.
 
T
h
i
s
 
i
s
 
s
e
l
f
-
c
o
n
t
a
i
n
e
d
 
a
n
d


 
 
d
o
e
s
 
n
o
t
 
c
o
n
n
e
c
t
 
t
o
 
t
h
e
 
c
e
n
t
r
a
l
 
`
p
o
s
t
g
r
e
s
`
 
s
e
r
v
i
c
e
.


-
 
*
*
P
e
r
m
i
s
s
i
o
n
 
m
o
d
e
l
*
*
:
 
O
p
e
n
-
s
o
u
r
c
e
 
E
t
h
e
r
p
a
d
 
h
a
s
 
l
i
m
i
t
e
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
 
c
o
n
t
r
o
l


 
 
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
 
p
e
r
 
p
a
d
,
 
n
o
 
u
s
e
r
-
b
a
s
e
d
 
A
C
L
)
.
 
F
o
r
 
m
o
r
e
 
g
r
a
n
u
l
a
r
 
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
,


 
 
c
o
n
s
i
d
e
r
 
C
r
y
p
t
P
a
d
 
o
r
 
H
e
d
g
e
D
o
c
.




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
 
D
e
p
e
n
d
s
 
O
n




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
)
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
 
(
e
m
b
e
d
d
e
d
)
,
 
H
A
P
r
o
x
y
 
I
n
g
r
e
s
s




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
t
i
l
e
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
 
S
t
a
n
d
a
r
d
 
(
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
,
 
n
o
t
 
c
r
i
t
i
c
a
l
 
f
o
r
 
c
o
r
e
 
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
3
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
2
0
0
m
s
 
(
O
T
 
s
y
n
c
)
 
|
 
E
t
h
e
r
p
a
d
 
m
e
t
r
i
c
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
 
E
d
i
t
o
r
s
*
*
 
|
 
5
0
 
p
e
r
 
p
a
d
 
(
m
a
x
)
 
|
 
E
t
h
e
r
p
a
d
 
s
o
c
k
e
t
 
m
e
t
r
i
c
s
 
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
 
E
t
h
e
r
p
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
 
D
a
t
a
b
a
s
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
 
p
o
o
l
 
e
x
h
a
u
s
t
e
d
 
→
 
P
3
 
a
l
e
r
t


-
 
O
I
D
C
 
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
 
f
a
i
l
u
r
e
s
 
>
5
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
 
2
,
0
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
 
(
v
i
e
w
i
n
g
/
e
d
i
t
i
n
g
)


-
 
1
0
,
0
0
0
 
p
a
d
s
 
c
r
e
a
t
e
d
 
p
e
r
 
m
o
n
t
h


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
 
5
 
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
 
5
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
:
 
D
a
i
l
y
 
f
u
l
l
 
b
a
c
k
u
p
 
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
 
a
n
d
 
c
o
n
t
e
n
t
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


-
 
*
*
P
a
d
 
c
o
n
t
e
n
t
*
*
:
 
I
n
c
l
u
d
e
d
 
i
n
 
d
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
 
r
e
s
t
o
r
e
 
-
 
2
0
 
m
i
n


2
.
 
E
t
h
e
r
p
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


3
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


4
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
 
s
a
v
e
)
 
-
 
1
0
 
m
i
n


5
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
 
c
o
n
t
e
n
t
 
(
t
e
x
t
,
 
f
o
r
m
a
t
t
i
n
g
,
 
r
e
v
i
s
i
o
n
s
)


-
 
U
s
e
r
 
a
c
c
o
u
n
t
s
 
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
c
r
e
a
t
i
o
n
 
d
a
t
e
,
 
a
u
t
h
o
r
,
 
t
a
g
s
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
D
a
t
a
b
a
s
e
 
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
 
b
a
c
k
u
p
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
 
c
o
n
t
e
n
t
 
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
O
I
D
C
 
m
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
a
t
i
o
n
*
*
:
 
R
e
-
r
e
g
i
s
t
e
r
 
c
l
i
e
n
t
 
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
,
 
v
e
r
i
f
y
 
S
S
O
 
f
l
o
w


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
 
D
B
,
 
v
e
r
i
f
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
i
o
n

