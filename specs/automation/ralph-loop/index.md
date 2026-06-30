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




-
-
-


t
i
t
l
e
:
 
"
C
o
n
t
i
n
u
o
u
s
 
S
e
l
f
-
I
m
p
r
o
v
e
m
e
n
t
 
L
o
o
p
 
(
R
a
l
p
h
)
"


d
a
t
e
:
 
"
2
0
2
6
-
0
6
-
2
8
"


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
:
 
"
S
p
e
c
i
f
i
c
a
t
i
o
n
 
f
o
r
 
a
u
t
o
m
a
t
e
d
 
c
o
n
t
i
n
u
o
u
s
 
i
m
p
r
o
v
e
m
e
n
t
 
l
o
o
p
s
 
t
h
a
t
 
a
u
d
i
t
,
 
f
i
x
,
 
a
n
d
 
m
a
i
n
t
a
i
n
 
t
h
e
 
O
p
e
n
S
p
e
c
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
a
u
t
o
m
a
t
i
c
a
l
l
y
 
u
s
i
n
g
 
C
I
/
C
D
 
p
i
p
e
l
i
n
e
s
.
"


c
a
t
e
g
o
r
i
e
s
:
 
[
"
A
u
t
o
m
a
t
i
o
n
"
,
 
"
S
e
l
f
-
I
m
p
r
o
v
e
m
e
n
t
"
,
 
"
D
e
v
O
p
s
"
]


t
a
g
s
:
 
[
"
r
a
l
p
h
"
,
 
"
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
"
,
 
"
c
i
-
c
d
"
,
 
"
a
u
t
o
m
a
t
i
o
n
"
,
 
"
c
o
n
t
i
n
u
o
u
s
-
i
m
p
r
o
v
e
m
e
n
t
"
]


a
u
t
h
o
r
:
 
"
T
o
b
i
a
s
 
W
e
i
ß
 
a
n
d
 
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
"


r
e
l
a
t
e
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
s
:


 
 
-
 
"
p
l
a
t
f
o
r
m
/
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
/
"


 
 
-
 
"
r
e
g
i
s
t
r
y
/
t
e
s
t
-
c
o
v
e
r
a
g
e
-
g
a
p
s
/
"


-
-
-




#
 
C
o
n
t
i
n
u
o
u
s
 
S
e
l
f
-
I
m
p
r
o
v
e
m
e
n
t
 
L
o
o
p
 
(
R
a
l
p
h
)




#
#
 
P
u
r
p
o
s
e




T
h
i
s
 
s
p
e
c
i
f
i
c
a
t
i
o
n
 
d
e
f
i
n
e
s
 
a
n
 
a
u
t
o
m
a
t
e
d
 
*
*
c
o
n
t
i
n
u
o
u
s
 
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
 
l
o
o
p
*
*
 
—
 
k
n
o
w
n
 
a
s
 
"
R
a
l
p
h
"
 
—
 
t
h
a
t
 
u
s
e
s
 
C
I
/
C
D
 
p
i
p
e
l
i
n
e
s
 
t
o
 
r
e
g
u
l
a
r
l
y
 
a
u
d
i
t
,
 
i
m
p
r
o
v
e
,
 
a
n
d
 
m
a
i
n
t
a
i
n
 
t
h
e
 
O
p
e
n
S
p
e
c
 
d
o
c
u
m
e
n
t
a
t
i
o
n
.
 
T
h
e
 
l
o
o
p
 
e
n
s
u
r
e
s
 
t
h
e
 
s
p
e
c
 
s
t
a
y
s
 
c
o
m
p
r
e
h
e
n
s
i
v
e
,
 
a
c
c
u
r
a
t
e
,
 
a
n
d
 
u
p
-
t
o
-
d
a
t
e
 
w
i
t
h
o
u
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
 
c
o
n
s
t
a
n
t
 
m
a
n
u
a
l
 
e
f
f
o
r
t
.




#
#
 
S
c
o
p
e




#
#
#
 
I
n
 
S
c
o
p
e




-
 
A
u
t
o
m
a
t
e
d
 
a
u
d
i
t
i
n
g
 
o
f
 
O
p
e
n
S
p
e
c
 
f
i
l
e
s
 
f
o
r
 
r
e
q
u
i
r
e
d
 
s
e
c
t
i
o
n
s


-
 
D
e
t
e
c
t
i
o
n
 
o
f
 
b
r
o
k
e
n
 
c
r
o
s
s
-
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
 
b
e
t
w
e
e
n
 
s
p
e
c
s


-
 
G
e
n
e
r
a
t
i
o
n
 
o
f
 
i
m
p
r
o
v
e
m
e
n
t
 
s
u
g
g
e
s
t
i
o
n
s


-
 
C
r
e
a
t
i
o
n
 
o
f
 
m
e
r
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
 
w
i
t
h
 
p
r
o
p
o
s
e
d
 
c
h
a
n
g
e
s


-
 
V
a
l
i
d
a
t
i
o
n
 
o
f
 
s
p
e
c
 
c
h
a
n
g
e
s
 
a
g
a
i
n
s
t
 
a
c
t
u
a
l
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n


-
 
S
c
h
e
d
u
l
e
d
 
a
n
d
 
o
n
-
d
e
m
a
n
d
 
e
x
e
c
u
t
i
o
n




#
#
#
 
O
u
t
 
o
f
 
S
c
o
p
e




-
 
C
h
a
n
g
e
s
 
t
o
 
a
c
t
u
a
l
 
s
e
r
v
i
c
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
s


-
 
N
e
w
 
s
e
r
v
i
c
e
 
a
d
d
i
t
i
o
n
s
 
(
h
a
n
d
l
e
d
 
b
y
 
h
u
m
a
n
 
c
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
)


-
 
B
r
e
a
k
i
n
g
 
c
h
a
n
g
e
s
 
t
o
 
e
x
i
s
t
i
n
g
 
s
p
e
c
s
 
(
r
e
q
u
i
r
e
 
h
u
m
a
n
 
r
e
v
i
e
w
)




#
#
 
B
a
c
k
g
r
o
u
n
d




T
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
 
O
p
e
n
S
p
e
c
 
c
o
n
t
a
i
n
s
 
5
8
+
 
s
p
e
c
i
f
i
c
a
t
i
o
n
 
f
i
l
e
s
 
a
c
r
o
s
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
 
p
o
r
t
f
o
l
i
o
,
 
1
7
 
p
l
a
t
f
o
r
m
 
s
p
e
c
i
f
i
c
a
t
i
o
n
s
,
 
a
n
d
 
6
 
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
p
e
c
i
f
i
c
a
t
i
o
n
s
.
 
M
a
i
n
t
a
i
n
i
n
g
 
t
h
i
s
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
m
a
n
u
a
l
l
y
 
i
s
 
c
h
a
l
l
e
n
g
i
n
g
 
b
e
c
a
u
s
e
:




-
 
S
p
e
c
s
 
c
a
n
 
b
e
c
o
m
e
 
o
u
t
d
a
t
e
d
 
a
s
 
s
e
r
v
i
c
e
s
 
e
v
o
l
v
e


-
 
C
r
o
s
s
-
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
 
b
e
t
w
e
e
n
 
s
p
e
c
s
 
c
a
n
 
b
r
e
a
k


-
 
R
e
q
u
i
r
e
d
 
s
e
c
t
i
o
n
s
 
(
P
u
r
p
o
s
e
,
 
S
c
o
p
e
,
 
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
,
 
S
L
O
,
 
D
R
)
 
c
a
n
 
b
e
 
f
o
r
g
o
t
t
e
n


-
 
C
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
 
i
s
 
h
a
r
d
 
t
o
 
m
a
i
n
t
a
i
n
 
a
c
r
o
s
s
 
m
a
n
y
 
f
i
l
e
s




T
h
e
 
*
*
R
a
l
p
h
 
l
o
o
p
*
*
 
(
n
a
m
e
d
 
a
f
t
e
r
 
t
h
e
 
m
y
t
h
o
l
o
g
i
c
a
l
 
f
i
g
u
r
e
 
w
h
o
 
e
t
e
r
n
a
l
l
y
 
i
m
p
r
o
v
e
s
 
a
 
b
o
u
l
d
e
r
)
 
a
d
d
r
e
s
s
e
s
 
t
h
e
s
e
 
c
h
a
l
l
e
n
g
e
s
 
t
h
r
o
u
g
h
 
a
u
t
o
m
a
t
i
o
n
.




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
 
A
u
t
o
m
a
t
e
d
 
S
p
e
c
 
A
u
d
i
t
i
n
g




T
h
e
 
s
y
s
t
e
m
 
S
H
A
L
L
 
a
u
t
o
m
a
t
i
c
a
l
l
y
 
a
u
d
i
t
 
O
p
e
n
S
p
e
c
 
f
i
l
e
s
 
f
o
r
 
c
o
m
p
l
e
t
e
n
e
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
 
R
e
q
u
i
r
e
d
 
S
e
c
t
i
o
n
 
C
h
e
c
k


-
 
*
*
G
I
V
E
N
*
*
 
a
n
 
O
p
e
n
S
p
e
c
 
f
i
l
e
 
a
t
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
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
{
n
a
m
e
}
/
`


-
 
*
*
W
H
E
N
*
*
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
r
u
n
s


-
 
*
*
T
H
E
N
*
*
 
i
t
 
v
e
r
i
f
i
e
s
 
t
h
e
 
p
r
e
s
e
n
c
e
 
o
f
:


 
 
-
 
`
#
#
 
P
u
r
p
o
s
e
`


 
 
-
 
`
#
#
 
S
c
o
p
e
`
 
(
w
i
t
h
 
`
#
#
#
 
I
n
 
S
c
o
p
e
`
 
a
n
d
 
`
#
#
#
 
O
u
t
 
o
f
 
S
c
o
p
e
`
)


 
 
-
 
`
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
`


 
 
-
 
`
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
`


 
 
-
 
`
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
`


 
 
-
 
`
#
#
 
S
L
O
`


 
 
-
 
`
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
 
C
r
o
s
s
-
R
e
f
e
r
e
n
c
e
 
V
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
 
*
*
G
I
V
E
N
*
*
 
a
n
 
O
p
e
n
S
p
e
c
 
f
i
l
e
 
c
o
n
t
a
i
n
s
 
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
 
l
i
k
e
 
`
.
.
/
o
t
h
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
`


-
 
*
*
W
H
E
N
*
*
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
r
u
n
s


-
 
*
*
T
H
E
N
*
*
 
i
t
 
v
e
r
i
f
i
e
s
 
t
h
a
t
:


 
 
-
 
T
h
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
d
 
f
i
l
e
 
e
x
i
s
t
s


 
 
-
 
T
h
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
d
 
s
e
r
v
i
c
e
 
i
s
 
s
t
i
l
l
 
i
n
 
s
c
o
p
e


 
 
-
 
T
h
e
 
l
i
n
k
 
i
s
 
n
o
t
 
b
r
o
k
e
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
 
I
m
p
r
o
v
e
m
e
n
t
 
S
u
g
g
e
s
t
i
o
n
 
G
e
n
e
r
a
t
i
o
n




W
h
e
n
 
i
s
s
u
e
s
 
a
r
e
 
f
o
u
n
d
,
 
t
h
e
 
s
y
s
t
e
m
 
S
H
A
L
L
 
g
e
n
e
r
a
t
e
 
a
c
t
i
o
n
a
b
l
e
 
s
u
g
g
e
s
t
i
o
n
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
 
A
u
t
o
-
f
i
x
a
b
l
e
 
I
s
s
u
e
s


-
 
*
*
G
I
V
E
N
*
*
 
a
 
m
i
s
s
i
n
g
 
`
#
#
 
S
c
o
p
e
`
 
s
e
c
t
i
o
n
 
i
s
 
d
e
t
e
c
t
e
d


-
 
*
*
W
H
E
N
*
*
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
g
e
n
e
r
a
t
e
s
 
a
 
f
i
x


-
 
*
*
T
H
E
N
*
*
 
i
t
 
c
r
e
a
t
e
s
 
a
 
m
e
r
g
e
 
r
e
q
u
e
s
t
 
w
i
t
h
:


 
 
-
 
A
 
t
e
m
p
l
a
t
e
 
`
#
#
 
S
c
o
p
e
`
 
s
e
c
t
i
o
n
 
w
i
t
h
 
p
l
a
c
e
h
o
l
d
e
r
 
t
e
x
t


 
 
-
 
C
l
e
a
r
 
c
o
m
m
i
t
 
m
e
s
s
a
g
e


 
 
-
 
R
e
f
e
r
e
n
c
e
 
t
o
 
t
h
e
 
i
s
s
u
e




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
a
n
u
a
l
 
R
e
v
i
e
w
 
R
e
q
u
i
r
e
d


-
 
*
*
G
I
V
E
N
*
*
 
a
 
c
r
o
s
s
-
r
e
f
e
r
e
n
c
e
 
p
o
i
n
t
s
 
t
o
 
a
 
n
o
n
-
e
x
i
s
t
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


-
 
*
*
W
H
E
N
*
*
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
g
e
n
e
r
a
t
e
s
 
a
 
f
i
x


-
 
*
*
T
H
E
N
*
*
 
i
t
 
c
r
e
a
t
e
s
 
a
n
 
i
s
s
u
e
 
(
n
o
t
 
a
 
P
R
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
 
h
u
m
a
n
 
r
e
v
i
e
w




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
I
/
C
D
 
I
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




T
h
e
 
l
o
o
p
 
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
 
e
x
i
s
t
i
n
g
 
C
I
/
C
D
 
i
n
f
r
a
s
t
r
u
c
t
u
r
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
 
S
c
h
e
d
u
l
e
d
 
E
x
e
c
u
t
i
o
n


-
 
*
*
G
I
V
E
N
*
*
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
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


-
 
*
*
W
H
E
N
*
*
 
t
h
e
 
s
c
h
e
d
u
l
e
 
t
r
i
g
g
e
r
s
 
(
e
.
g
.
,
 
w
e
e
k
l
y
)


-
 
*
*
T
H
E
N
*
*
 
t
h
e
 
l
o
o
p
:


 
 
-
 
C
l
o
n
e
s
 
t
h
e
 
l
a
t
e
s
t
 
s
p
e
c


 
 
-
 
R
u
n
s
 
a
l
l
 
a
u
d
i
t
 
c
h
e
c
k
s


 
 
-
 
G
e
n
e
r
a
t
e
s
 
a
 
r
e
p
o
r
t


 
 
-
 
C
r
e
a
t
e
s
 
m
e
r
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
 
f
o
r
 
a
u
t
o
-
f
i
x
a
b
l
e
 
i
s
s
u
e
s


 
 
-
 
L
o
g
s
 
r
e
s
u
l
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
 
M
a
n
u
a
l
 
T
r
i
g
g
e
r


-
 
*
*
G
I
V
E
N
*
*
 
a
 
m
a
i
n
t
a
i
n
e
r
 
t
r
i
g
g
e
r
s
 
t
h
e
 
l
o
o
p
 
m
a
n
u
a
l
l
y


-
 
*
*
W
H
E
N
*
*
 
t
h
e
y
 
r
u
n
 
`
p
y
t
h
o
n
3
 
r
a
l
p
h
_
l
o
o
p
.
p
y
`


-
 
*
*
T
H
E
N
*
*
 
t
h
e
 
l
o
o
p
 
r
u
n
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
 
w
i
t
h
 
v
e
r
b
o
s
e
 
o
u
t
p
u
t




#
#
 
R
a
l
p
h
 
L
o
o
p
 
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




`
`
`


┌
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┐


│
 
 
C
I
/
C
D
 
P
i
p
e
l
i
n
e
 
(
G
i
t
L
a
b
 
C
I
,
 
G
i
t
H
u
b
 
A
c
t
i
o
n
s
,
 
e
t
c
.
)
 
 
 
 
│


│
 
 
T
r
i
g
g
e
r
e
d
 
b
y
:
 
S
c
h
e
d
u
l
e
,
 
P
u
s
h
,
 
M
a
n
u
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


└
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┬
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┘


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
▼


┌
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┐


│
 
 
R
a
l
p
h
 
L
o
o
p
 
E
x
e
c
u
t
o
r
 
(
r
a
l
p
h
_
l
o
o
p
.
p
y
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


│
 
 
1
.
 
C
l
o
n
e
 
l
a
t
e
s
t
 
O
p
e
n
S
p
e
c
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


│
 
 
2
.
 
R
u
n
 
a
u
d
i
t
 
c
h
e
c
k
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


│
 
 
3
.
 
G
e
n
e
r
a
t
e
 
f
i
x
 
s
u
g
g
e
s
t
i
o
n
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


│
 
 
4
.
 
C
r
e
a
t
e
 
P
R
s
 
o
r
 
i
s
s
u
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


│
 
 
5
.
 
G
e
n
e
r
a
t
e
 
r
e
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


└
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┬
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┘


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


 
 
 
 
 
 
 
 
┌
─
─
─
─
─
─
─
─
─
─
─
─
┼
─
─
─
─
─
─
─
─
─
─
─
─
┐


 
 
 
 
 
 
 
 
│
 
 
 
 
 
 
 
 
 
 
 
 
│
 
 
 
 
 
 
 
 
 
 
 
 
│


 
 
 
 
 
 
 
 
▼
 
 
 
 
 
 
 
 
 
 
 
 
▼
 
 
 
 
 
 
 
 
 
 
 
 
▼


 
 
 
┌
─
─
─
─
─
─
─
─
─
┐
 
 
┌
─
─
─
─
─
─
─
─
─
─
┐
 
 
┌
─
─
─
─
─
─
─
─
─
─
┐


 
 
 
│
 
A
u
d
i
t
 
 
 
│
 
 
│
 
R
e
p
o
r
t
s
 
 
│
 
 
│
 
P
R
s
/
 
 
 
 
 
│


 
 
 
│
 
E
n
g
i
n
e
 
 
│
 
 
│
 
(
J
S
O
N
+
 
 
 
│
 
 
│
 
I
s
s
u
e
s
 
 
 
│


 
 
 
│
 
 
 
 
 
 
 
 
 
│
 
 
│
 
 
M
D
)
 
 
 
 
 
│
 
 
│
 
 
 
 
 
 
 
 
 
 
│


 
 
 
└
─
─
─
─
─
─
─
─
─
┘
 
 
└
─
─
─
─
─
─
─
─
─
─
┘
 
 
└
─
─
─
─
─
─
─
─
─
─
┘


`
`
`




#
#
 
I
m
p
l
e
m
e
n
t
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
f
e
r
e
n
c
e
 
I
m
p
l
e
m
e
n
t
a
t
i
o
n




A
 
w
o
r
k
i
n
g
 
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
m
p
l
e
m
e
n
t
a
t
i
o
n
 
e
x
i
s
t
s
 
a
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
e
d
u
/
.
g
i
t
l
a
b
/
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
/
`
:




`
`
`
p
y
t
h
o
n


#
 
r
a
l
p
h
_
l
o
o
p
.
p
y
 
-
 
M
a
i
n
 
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


i
m
p
o
r
t
 
y
a
m
l


i
m
p
o
r
t
 
s
u
b
p
r
o
c
e
s
s


f
r
o
m
 
p
a
t
h
l
i
b
 
i
m
p
o
r
t
 
P
a
t
h




c
l
a
s
s
 
R
a
l
p
h
L
o
o
p
:


 
 
 
 
"
"
"
C
o
n
t
i
n
u
o
u
s
 
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
 
l
o
o
p
 
f
o
r
 
O
p
e
n
S
p
e
c
.
"
"
"


 
 
 
 


 
 
 
 
d
e
f
 
_
_
i
n
i
t
_
_
(
s
e
l
f
,
 
c
o
n
f
i
g
_
p
a
t
h
:
 
s
t
r
 
=
 
'
.
r
a
l
p
h
/
c
o
n
f
i
g
.
y
a
m
l
'
)
:


 
 
 
 
 
 
 
 
s
e
l
f
.
c
o
n
f
i
g
 
=
 
s
e
l
f
.
_
l
o
a
d
_
c
o
n
f
i
g
(
c
o
n
f
i
g
_
p
a
t
h
)


 
 
 
 
 
 
 
 
s
e
l
f
.
r
e
p
o
r
t
_
d
i
r
 
=
 
P
a
t
h
(
s
e
l
f
.
c
o
n
f
i
g
[
'
r
e
p
o
r
t
i
n
g
'
]
[
'
o
u
t
p
u
t
_
d
i
r
'
]
)


 
 
 
 


 
 
 
 
d
e
f
 
r
u
n
_
i
t
e
r
a
t
i
o
n
(
s
e
l
f
)
 
-
>
 
d
i
c
t
:


 
 
 
 
 
 
 
 
"
"
"
R
u
n
 
a
 
s
i
n
g
l
e
 
i
t
e
r
a
t
i
o
n
 
o
f
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
.
"
"
"


 
 
 
 
 
 
 
 
r
e
s
u
l
t
s
 
=
 
{


 
 
 
 
 
 
 
 
 
 
 
 
'
t
i
m
e
s
t
a
m
p
'
:
 
d
a
t
e
t
i
m
e
.
n
o
w
(
)
.
i
s
o
f
o
r
m
a
t
(
)
,


 
 
 
 
 
 
 
 
 
 
 
 
'
t
a
s
k
s
'
:
 
[
]


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
f
o
r
 
a
r
e
a
 
i
n
 
s
e
l
f
.
c
o
n
f
i
g
[
'
f
o
c
u
s
_
a
r
e
a
s
'
]
:


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
t
a
s
k
 
i
n
 
a
r
e
a
[
'
t
a
s
k
s
'
]
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
s
e
l
f
.
_
r
u
n
_
t
a
s
k
(
t
a
s
k
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
s
[
'
t
a
s
k
s
'
]
.
a
p
p
e
n
d
(
r
e
s
u
l
t
)


 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
s


 
 
 
 


 
 
 
 
d
e
f
 
_
r
u
n
_
t
a
s
k
(
s
e
l
f
,
 
t
a
s
k
:
 
d
i
c
t
)
 
-
>
 
d
i
c
t
:


 
 
 
 
 
 
 
 
"
"
"
E
x
e
c
u
t
e
 
a
 
s
i
n
g
l
e
 
a
u
d
i
t
 
t
a
s
k
.
"
"
"


 
 
 
 
 
 
 
 
t
r
y
:


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
p
u
t
 
=
 
s
u
b
p
r
o
c
e
s
s
.
r
u
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
s
k
[
'
c
o
m
m
a
n
d
'
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
e
l
l
=
T
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
p
t
u
r
e
_
o
u
t
p
u
t
=
T
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
=
T
r
u
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
o
u
t
=
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
n
a
m
e
'
:
 
t
a
s
k
[
'
i
d
'
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
s
u
c
c
e
s
s
'
:
 
o
u
t
p
u
t
.
r
e
t
u
r
n
c
o
d
e
 
=
=
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
o
u
t
p
u
t
'
:
 
o
u
t
p
u
t
.
s
t
d
o
u
t
 
+
 
o
u
t
p
u
t
.
s
t
d
e
r
r


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
e
x
c
e
p
t
 
E
x
c
e
p
t
i
o
n
 
a
s
 
e
:


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
n
a
m
e
'
:
 
t
a
s
k
[
'
i
d
'
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
s
u
c
c
e
s
s
'
:
 
F
a
l
s
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
'
e
r
r
o
r
'
:
 
s
t
r
(
e
)


 
 
 
 
 
 
 
 
 
 
 
 
}


`
`
`




#
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
 
F
o
r
m
a
t




`
`
`
y
a
m
l


#
 
r
a
l
p
h
-
c
o
n
f
i
g
.
y
a
m
l


l
o
o
p
:


 
 
n
a
m
e
:
 
"
o
p
e
n
e
d
u
-
s
p
e
c
-
i
m
p
r
o
v
e
m
e
n
t
"


 
 
i
n
t
e
r
v
a
l
:
 
"
w
e
e
k
l
y
"


 
 
m
a
x
_
i
t
e
r
a
t
i
o
n
s
:
 
5
2




f
o
c
u
s
_
a
r
e
a
s
:


 
 
-
 
n
a
m
e
:
 
"
S
p
e
c
 
C
o
m
p
l
e
t
e
n
e
s
s
"


 
 
 
 
p
r
i
o
r
i
t
y
:
 
1


 
 
 
 
t
a
s
k
s
:


 
 
 
 
 
 
-
 
i
d
:
 
"
c
h
e
c
k
-
p
u
r
p
o
s
e
-
s
e
c
t
i
o
n
"


 
 
 
 
 
 
 
 
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
:
 
"
V
e
r
i
f
y
 
a
l
l
 
s
p
e
c
s
 
h
a
v
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
 
s
e
c
t
i
o
n
"


 
 
 
 
 
 
 
 
c
o
m
m
a
n
d
:
 
|


 
 
 
 
 
 
 
 
 
 
f
i
n
d
 
o
p
e
n
s
p
e
c
/
s
p
e
c
s
 
-
n
a
m
e
 
"
"
 
-
e
x
e
c
 
\


 
 
 
 
 
 
 
 
 
 
 
 
g
r
e
p
 
-
L
 
"
#
#
 
P
u
r
p
o
s
e
"
 
{
}
 
\
;


`
`
`




#
#
#
 
C
I
/
C
D
 
I
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
 
E
x
a
m
p
l
e
s




#
#
#
#
 
G
i
t
L
a
b
 
C
I




`
`
`
y
a
m
l


#
 
.
g
i
t
l
a
b
-
c
i
.
y
m
l


r
a
l
p
h
-
l
o
o
p
:


 
 
s
t
a
g
e
:
 
a
u
d
i
t


 
 
s
c
r
i
p
t
:


 
 
 
 
-
 
p
y
t
h
o
n
3
 
.
g
i
t
l
a
b
/
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
/
r
a
l
p
h
_
l
o
o
p
.
p
y


 
 
r
u
l
e
s
:


 
 
 
 
-
 
i
f
:
 
$
C
I
_
P
I
P
E
L
I
N
E
_
S
O
U
R
C
E
 
=
=
 
"
s
c
h
e
d
u
l
e
"


 
 
 
 
-
 
i
f
:
 
$
C
I
_
P
I
P
E
L
I
N
E
_
S
O
U
R
C
E
 
=
=
 
"
w
e
b
"


`
`
`




#
#
#
#
 
G
i
t
H
u
b
 
A
c
t
i
o
n
s




`
`
`
y
a
m
l


#
 
.
g
i
t
h
u
b
/
w
o
r
k
f
l
o
w
s
/
r
a
l
p
h
.
y
m
l


n
a
m
e
:
 
R
a
l
p
h
 
L
o
o
p


o
n
:


 
 
s
c
h
e
d
u
l
e
:


 
 
 
 
-
 
c
r
o
n
:
 
'
0
 
2
 
*
 
*
 
1
'


 
 
w
o
r
k
f
l
o
w
_
d
i
s
p
a
t
c
h
:


j
o
b
s
:


 
 
r
a
l
p
h
:


 
 
 
 
r
u
n
s
-
o
n
:
 
u
b
u
n
t
u
-
l
a
t
e
s
t


 
 
 
 
s
t
e
p
s
:


 
 
 
 
 
 
-
 
u
s
e
s
:
 
a
c
t
i
o
n
s
/
c
h
e
c
k
o
u
t
@
v
4


 
 
 
 
 
 
-
 
r
u
n
:
 
p
y
t
h
o
n
3
 
.
r
a
l
p
h
/
l
o
o
p
.
p
y


`
`
`




#
#
 
A
u
d
i
t
 
C
h
e
c
k
 
C
a
t
e
g
o
r
i
e
s




#
#
#
 
1
.
 
R
e
q
u
i
r
e
d
 
S
e
c
t
i
o
n
 
C
h
e
c
k
s




F
o
r
 
e
a
c
h
 
O
p
e
n
S
p
e
c
 
f
i
l
e
,
 
v
e
r
i
f
y
:




-
 
[
 
]
 
`
#
#
 
P
u
r
p
o
s
e
`
 
—
 
D
e
s
c
r
i
b
e
s
 
w
h
a
t
 
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
 
d
o
e
s


-
 
[
 
]
 
`
#
#
 
S
c
o
p
e
`
 
—
 
D
e
f
i
n
e
s
 
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
 
(
I
n
/
O
u
t
 
o
f
 
S
c
o
p
e
)


-
 
[
 
]
 
`
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
`
 
—
 
E
x
p
l
i
c
i
t
 
e
x
c
l
u
s
i
o
n
s


-
 
[
 
]
 
`
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
`
 
—
 
F
u
n
c
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


-
 
[
 
]
 
`
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
`
 
—
 
D
e
p
e
n
d
e
n
c
y
 
d
e
c
l
a
r
a
t
i
o
n
s


-
 
[
 
]
 
`
#
#
 
S
L
O
`
 
—
 
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


-
 
[
 
]
 
`
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
`
 
—
 
R
P
O
/
R
T
O
 
t
a
r
g
e
t
s




#
#
#
 
2
.
 
C
r
o
s
s
-
R
e
f
e
r
e
n
c
e
 
V
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
 
[
 
]
 
A
l
l
 
`
.
.
/
*
`
 
l
i
n
k
s
 
r
e
s
o
l
v
e


-
 
[
 
]
 
S
e
r
v
i
c
e
 
n
a
m
e
s
 
m
a
t
c
h
 
b
e
t
w
e
e
n
 
s
p
e
c
s
 
a
n
d
 
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
 
m
a
t
r
i
x


-
 
[
 
]
 
N
o
 
c
i
r
c
u
l
a
r
 
d
e
p
e
n
d
e
n
c
i
e
s




#
#
#
 
3
.
 
C
o
n
t
e
n
t
 
Q
u
a
l
i
t
y
 
C
h
e
c
k
s




-
 
[
 
]
 
N
o
 
T
O
D
O
/
F
I
X
M
E
 
p
l
a
c
e
h
o
l
d
e
r
s
 
i
n
 
c
o
m
m
i
t
t
e
d
 
s
p
e
c
s


-
 
[
 
]
 
B
D
D
 
s
c
e
n
a
r
i
o
s
 
h
a
v
e
 
G
i
v
e
n
/
W
h
e
n
/
T
h
e
n


-
 
[
 
]
 
S
L
O
 
t
a
r
g
e
t
s
 
a
r
e
 
m
e
a
s
u
r
a
b
l
e


-
 
[
 
]
 
D
R
 
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
 
a
r
e
 
r
u
n
n
a
b
l
e




#
#
#
 
4
.
 
C
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
 
C
h
e
c
k
s




-
 
[
 
]
 
C
o
n
s
i
s
t
e
n
t
 
t
e
r
m
i
n
o
l
o
g
y
 
a
c
r
o
s
s
 
s
p
e
c
s


-
 
[
 
]
 
U
n
i
f
o
r
m
 
d
a
t
e
 
f
o
r
m
a
t
 
(
I
S
O
 
8
6
0
1
)


-
 
[
 
]
 
L
i
c
e
n
s
e
 
h
e
a
d
e
r
s
 
p
r
e
s
e
n
t


-
 
[
 
]
 
T
i
e
r
 
c
l
a
s
s
i
f
i
c
a
t
i
o
n
s
 
c
o
n
s
i
s
t
e
n
t




#
#
 
F
a
i
l
u
r
e
 
M
o
d
e
s
 
a
n
d
 
R
e
c
o
v
e
r
y




#
#
#
 
M
o
d
e
:
 
A
u
t
o
-
f
i
x
 
F
a
i
l
e
d




W
h
e
n
 
t
h
e
 
R
a
l
p
h
 
l
o
o
p
 
c
a
n
n
o
t
 
a
u
t
o
-
f
i
x
 
a
n
 
i
s
s
u
e
:




1
.
 
C
r
e
a
t
e
s
 
a
 
G
i
t
H
u
b
/
G
i
t
L
a
b
 
i
s
s
u
e
 
w
i
t
h
:


 
 
 
-
 
D
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
 
o
f
 
t
h
e
 
p
r
o
b
l
e
m


 
 
 
-
 
A
f
f
e
c
t
e
d
 
f
i
l
e
s


 
 
 
-
 
S
u
g
g
e
s
t
e
d
 
m
a
n
u
a
l
 
f
i
x


 
 
 
-
 
L
a
b
e
l
s
:
 
`
r
a
l
p
h
-
l
o
o
p
`
,
 
`
s
p
e
c
-
q
u
a
l
i
t
y
`


2
.
 
A
s
s
i
g
n
s
 
t
o
 
s
p
e
c
 
m
a
i
n
t
a
i
n
e
r


3
.
 
P
o
s
t
s
 
i
n
 
c
o
m
m
u
n
i
t
y
 
c
h
a
t
 
(
i
f
 
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
)




#
#
#
 
M
o
d
e
:
 
G
i
t
 
O
p
e
r
a
t
i
o
n
 
F
a
i
l
e
d




W
h
e
n
 
g
i
t
 
p
u
s
h
 
o
r
 
P
R
 
c
r
e
a
t
i
o
n
 
f
a
i
l
s
:




1
.
 
R
e
t
r
i
e
s
 
3
 
t
i
m
e
s
 
w
i
t
h
 
e
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f


2
.
 
I
f
 
s
t
i
l
l
 
f
a
i
l
i
n
g
,
 
l
o
g
s
 
e
r
r
o
r
 
t
o
 
f
i
l
e


3
.
 
S
e
n
d
s
 
a
l
e
r
t
 
n
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


4
.
 
C
o
n
t
i
n
u
e
s
 
w
i
t
h
 
r
e
m
a
i
n
i
n
g
 
t
a
s
k
s




#
#
#
 
M
o
d
e
:
 
C
I
/
C
D
 
P
i
p
e
l
i
n
e
 
D
o
w
n




W
h
e
n
 
t
h
e
 
C
I
/
C
D
 
s
y
s
t
e
m
 
i
s
 
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
:




1
.
 
R
a
l
p
h
 
l
o
o
p
 
c
a
n
 
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
:
 
`
p
y
t
h
o
n
3
 
r
a
l
p
h
_
l
o
o
p
.
p
y
`


2
.
 
R
e
s
u
l
t
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
 
l
o
c
a
l
 
r
e
p
o
r
t
s
 
d
i
r
e
c
t
o
r
y


3
.
 
C
a
n
 
b
e
 
p
u
s
h
e
d
 
l
a
t
e
r
 
w
h
e
n
 
C
I
/
C
D
 
i
s
 
r
e
s
t
o
r
e
d




#
#
 
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
 
C
o
n
s
i
d
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




-
 
*
*
E
x
e
c
u
t
i
o
n
 
T
i
m
e
*
*
:
 
5
-
1
5
 
m
i
n
u
t
e
s
 
f
o
r
 
f
u
l
l
 
i
t
e
r
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
s
o
u
r
c
e
 
U
s
a
g
e
*
*
:
 
M
i
n
i
m
a
l
 
(
P
y
t
h
o
n
 
s
c
r
i
p
t
,
 
n
o
 
h
e
a
v
y
 
c
o
m
p
u
t
a
t
i
o
n
)


-
 
*
*
N
e
t
w
o
r
k
*
*
:
 
R
e
q
u
i
r
e
s
 
r
e
a
d
 
a
c
c
e
s
s
 
t
o
 
s
p
e
c
 
r
e
p
o
s
i
t
o
r
y
,
 
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
 
f
o
r
 
P
R
s




#
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




-
 
U
s
e
 
o
f
 
G
i
t
H
u
b
 
A
p
p
s
 
o
r
 
G
i
t
L
a
b
 
T
o
k
e
n
s
 
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
 
r
e
q
u
i
r
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
s


-
 
N
o
 
a
c
c
e
s
s
 
t
o
 
p
r
o
d
u
c
t
i
o
n
 
s
y
s
t
e
m
s


-
 
A
l
l
 
c
h
a
n
g
e
s
 
g
o
 
t
h
r
o
u
g
h
 
c
o
d
e
 
r
e
v
i
e
w


-
 
N
o
 
s
e
c
r
e
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




#
#
#
 
S
c
a
l
a
b
i
l
i
t
y




-
 
T
h
e
 
l
o
o
p
 
c
a
n
 
h
a
n
d
l
e
 
1
0
0
+
 
s
p
e
c
 
f
i
l
e
s


-
 
P
a
r
a
l
l
e
l
 
e
x
e
c
u
t
i
o
n
 
o
f
 
i
n
d
e
p
e
n
d
e
n
t
 
c
h
e
c
k
s


-
 
I
n
c
r
e
m
e
n
t
a
l
 
p
r
o
c
e
s
s
i
n
g
 
f
o
r
 
l
a
r
g
e
 
s
p
e
c
 
s
e
t
s


-
 
R
a
t
e
 
l
i
m
i
t
i
n
g
 
f
o
r
 
G
i
t
 
A
P
I
 
c
a
l
l
s




#
#
 
S
e
l
f
-
I
m
p
r
o
v
e
m
e
n
t
 
A
g
e
n
t
 
I
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




T
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
r
o
j
e
c
t
 
a
l
r
e
a
d
y
 
i
n
c
l
u
d
e
s
 
a
 
*
*
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
 
a
g
e
n
t
*
*
 
i
n
 
t
h
e
 
O
p
e
n
S
p
e
c
:




-
 
L
o
c
a
t
i
o
n
:
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
/
.
g
i
t
l
a
b
/
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
/
`


-
 
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
:
 
A
u
d
i
t
s
 
s
p
e
c
s
,
 
g
e
n
e
r
a
t
e
s
 
f
i
x
e
s
,
 
c
r
e
a
t
e
s
 
P
R
s


-
 
I
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
:
 
R
u
n
s
 
v
i
a
 
G
i
t
L
a
b
 
C
I
 
w
e
e
k
l
y


-
 
E
x
t
e
n
s
i
o
n
:
 
T
h
e
 
R
a
l
p
h
 
l
o
o
p
 
g
e
n
e
r
a
l
i
z
e
s
 
a
n
d
 
e
x
t
e
n
d
s
 
t
h
i
s
 
a
p
p
r
o
a
c
h




#
#
 
B
e
s
t
 
P
r
a
c
t
i
c
e
s




1
.
 
*
*
S
t
a
r
t
 
S
m
a
l
l
*
*
:
 
B
e
g
i
n
 
w
i
t
h
 
c
r
i
t
i
c
a
l
 
c
h
e
c
k
s
,
 
e
x
p
a
n
d
 
g
r
a
d
u
a
l
l
y


2
.
 
*
*
R
e
v
i
e
w
 
A
u
t
o
-
f
i
x
e
s
*
*
:
 
A
l
w
a
y
s
 
r
e
q
u
i
r
e
 
h
u
m
a
n
 
r
e
v
i
e
w
 
f
o
r
 
P
R
s


3
.
 
*
*
D
o
c
u
m
e
n
t
 
R
u
l
e
s
*
*
:
 
M
a
k
e
 
a
u
d
i
t
 
r
u
l
e
s
 
e
x
p
l
i
c
i
t
 
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
e
d


4
.
 
*
*
M
e
a
s
u
r
e
 
I
m
p
a
c
t
*
*
:
 
T
r
a
c
k
 
m
e
t
r
i
c
s
 
l
i
k
e
 
s
p
e
c
 
c
o
v
e
r
a
g
e
 
o
v
e
r
 
t
i
m
e


5
.
 
*
*
I
t
e
r
a
t
e
*
*
:
 
I
m
p
r
o
v
e
 
t
h
e
 
l
o
o
p
 
b
a
s
e
d
 
o
n
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
s
/
n
e
g
a
t
i
v
e
s


6
.
 
*
*
E
n
g
a
g
e
 
C
o
m
m
u
n
i
t
y
*
*
:
 
S
h
a
r
e
 
f
i
n
d
i
n
g
s
,
 
i
n
v
i
t
e
 
c
o
n
t
r
i
b
u
t
i
o
n
s




#
#
 
F
u
t
u
r
e
 
E
n
h
a
n
c
e
m
e
n
t
s




-
 
[
 
]
 
A
I
-
p
o
w
e
r
e
d
 
s
p
e
c
 
c
o
n
t
e
n
t
 
a
n
a
l
y
s
i
s


-
 
[
 
]
 
A
u
t
o
m
a
t
i
c
 
s
p
e
c
 
d
i
a
g
r
a
m
 
g
e
n
e
r
a
t
i
o
n


-
 
[
 
]
 
C
r
o
s
s
-
s
p
e
c
 
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
 
[
 
]
 
S
p
e
c
 
c
o
v
e
r
a
g
e
 
m
e
t
r
i
c
s
 
d
a
s
h
b
o
a
r
d


-
 
[
 
]
 
I
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
 
w
i
t
h
 
d
e
s
i
g
n
 
d
o
c
s
 
a
n
d
 
A
D
R
s


-
 
[
 
]
 
A
u
t
o
m
a
t
i
c
 
t
r
a
n
s
l
a
t
i
o
n
 
q
u
a
l
i
t
y
 
c
h
e
c
k
s




#
#
 
R
e
f
e
r
e
n
c
e
s




-
 
[
S
e
l
f
-
I
m
p
r
o
v
e
m
e
n
t
 
A
g
e
n
t
]
(
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
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
d
u
/
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
d
u
/
t
r
e
e
/
m
a
i
n
/
.
g
i
t
l
a
b
/
s
e
l
f
-
i
m
p
r
o
v
e
m
e
n
t
)
 
-
 
R
e
f
e
r
e
n
c
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n


-
 
[
R
a
l
p
h
 
L
o
o
p
 
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
]
(
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
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
d
u
/
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
d
u
/
b
l
o
b
/
m
a
i
n
/
.
r
a
l
p
h
/
c
o
n
f
i
g
.
y
a
m
l
)
 
-
 
W
o
r
k
i
n
g
 
e
x
a
m
p
l
e


-
 
[
O
p
e
n
S
p
e
c
 
M
e
t
h
o
d
o
l
o
g
y
]
(
.
.
/
.
.
/
m
e
t
h
o
d
o
l
o
g
y
/
s
p
e
c
-
w
r
i
t
i
n
g
/
)
 
-
 
H
o
w
 
s
p
e
c
s
 
a
r
e
 
s
t
r
u
c
t
u
r
e
d


-
 
[
G
i
t
L
a
b
 
C
I
/
C
D
 
D
o
c
u
m
e
n
t
a
t
i
o
n
]
(
h
t
t
p
s
:
/
/
d
o
c
s
.
g
i
t
l
a
b
.
c
o
m
/
e
e
/
c
i
/
)
 
-
 
C
I
/
C
D
 
r
e
f
e
r
e
n
c
e


-
 
[
G
i
t
H
u
b
 
A
c
t
i
o
n
s
 
D
o
c
u
m
e
n
t
a
t
i
o
n
]
(
h
t
t
p
s
:
/
/
d
o
c
s
.
g
i
t
h
u
b
.
c
o
m
/
e
n
/
a
c
t
i
o
n
s
)
 
-
 
C
I
/
C
D
 
r
e
f
e
r
e
n
c
e




#
#
 
R
e
l
a
t
e
d
 
S
p
e
c
i
f
i
c
a
t
i
o
n
s




-
 
[
O
p
e
r
a
t
i
o
n
s
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
/
)
 
-
 
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
 
t
h
a
t
 
R
a
l
p
h
 
m
o
n
i
t
o
r
s


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
 
-
 
M
e
t
r
i
c
s
 
t
h
a
t
 
i
n
f
o
r
m
 
R
a
l
p
h
'
s
 
c
h
e
c
k
s


-
 
[
T
e
s
t
 
C
o
v
e
r
a
g
e
 
G
a
p
s
]
(
.
.
/
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
t
e
s
t
-
c
o
v
e
r
a
g
e
-
g
a
p
s
/
)
 
-
 
A
r
e
a
s
 
w
h
e
r
e
 
R
a
l
p
h
 
h
e
l
p
s


-
 
[
S
e
r
v
i
c
e
 
I
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
 
M
a
t
r
i
x
]
(
.
.
/
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
)
 
-
 
V
a
l
i
d
a
t
e
d
 
b
y
 
R
a
l
p
h

