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
 
L
i
m
e
S
u
r
v
e
y




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
u
r
v
e
y
 
p
l
a
t
f
o
r
m
 
f
o
r
 
c
o
u
r
s
e
 
e
v
a
l
u
a
t
i
o
n
s
,
 
a
c
a
d
e
m
i
c
 
r
e
s
e
a
r
c
h
,
 
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
a
l
 
f
e
e
d
b
a
c
k
,


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
 
q
u
e
s
t
i
o
n
n
a
i
r
e
s
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
 
L
D
A
P
 
b
i
n
d
 
(
d
i
r
e
c
t
 
t
o
 
O
p
e
n
L
D
A
P
,


N
O
T
 
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
)
,
 
w
i
t
h
 
M
a
r
i
a
D
B
 
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
 
s
u
r
v
e
y
 
d
e
f
i
n
i
t
i
o
n
s
 
a
n
d
 
r
e
s
p
o
n
s
e
s
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
 
L
i
m
e
S
u
r
v
e
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
,
 
s
u
r
v
e
y
 
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
 
q
u
e
s
t
i
o
n
 
t
y
p
e
s
 
(
s
i
n
g
l
e
/
m
u
l
t
i
-
s
e
l
e
c
t
,
 
t
e
x
t
,
 
L
i
k
e
r
t
 
s
c
a
l
e
s
)
,
 
r
e
s
p
o
n
s
e
 
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
,
 
U
R
L
-
b
a
s
e
d
 
s
u
r
v
e
y
 
d
i
s
t
r
i
b
u
t
i
o
n
,
 
L
D
A
P
 
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
 
M
a
r
i
a
D
B
 
b
a
c
k
e
n
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
 
s
u
r
v
e
y
 
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
R
E
D
C
a
p
,
 
S
u
r
v
e
y
M
o
n
k
e
y
,
 
e
t
c
.
)
,
 
a
d
v
a
n
c
e
d
 
s
t
a
t
i
s
t
i
c
a
l
 
a
n
a
l
y
s
i
s
 
(
R
,
 
S
P
S
S
,
 
e
t
c
.
)
,
 
s
u
r
v
e
y
 
a
n
a
l
y
t
i
c
s
 
a
n
d
 
r
e
p
o
r
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
 
b
a
s
i
c
 
r
e
s
p
o
n
s
e
 
v
i
e
w
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
 
s
u
r
v
e
y
 
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
 
R
E
D
C
a
p
,
 
S
u
r
v
e
y
M
o
n
k
e
y
,
 
e
t
c
.
)


-
 
A
d
v
a
n
c
e
d
 
s
t
a
t
i
s
t
i
c
a
l
 
a
n
a
l
y
s
i
s
 
(
u
s
e
 
R
,
 
S
P
S
S
,
 
e
t
c
.
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
u
r
v
e
y
 
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




L
i
m
e
S
u
r
v
e
y
 
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
 
c
r
e
a
t
i
n
g
 
s
u
r
v
e
y
s
,
 
a
d
d
i
n
g
 
q
u
e
s
t
i
o
n
s
 
(
s
i
n
g
l
e
/
m
u
l
t
i
-
s
e
l
e
c
t
,


t
e
x
t
,
L
i
k
e
r
t
 
s
c
a
l
e
s
)
,
 
c
o
n
f
i
g
u
r
i
n
g
 
r
e
s
p
o
n
s
e
 
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
 
s
e
t
t
i
n
g
s
 
(
p
u
b
l
i
c
 
v
s
.


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
,
 
o
n
e
-
t
i
m
e
 
v
s
.
 
m
u
l
t
i
p
l
e
 
r
e
s
p
o
n
s
e
s
)
,
 
a
n
d
 
d
i
s
t
r
i
b
u
t
i
n
g
 
s
u
r
v
e
y
s
 
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
 
c
r
e
a
t
e
s
 
s
u
r
v
e
y


-
 
G
I
V
E
N
 
a
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
 
i
n
 
t
h
e
 
`
l
i
m
e
s
u
r
v
e
y
-
a
d
m
i
n
s
`
 
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
 
l
o
g
s
 
i
n
 
v
i
a
 
L
D
A
P
 
b
i
n
d
 
t
o
 
`
l
i
m
e
s
u
r
v
e
y
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
 
c
a
n
 
c
r
e
a
t
e
 
a
 
n
e
w
 
s
u
r
v
e
y


-
 
A
N
D
 
c
a
n
 
a
d
d
 
q
u
e
s
t
i
o
n
s
 
(
q
u
e
s
t
i
o
n
 
t
y
p
e
s
:
 
s
i
n
g
l
e
-
c
h
o
i
c
e
,
 
m
u
l
t
i
-
c
h
o
i
c
e
,
 
t
e
x
t
 
t
e
x
t
a
r
e
a
,
 
L
i
k
e
r
t
 
s
c
a
l
e
s
)


-
 
A
N
D
 
c
a
n
 
c
o
n
f
i
g
u
r
e
 
r
e
s
p
o
n
s
e
 
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
:


 
 
-
 
"
P
u
b
l
i
c
 
s
u
r
v
e
y
"
 
(
n
o
 
a
u
t
h
 
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
 
"
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
 
o
n
l
y
"
 
(
g
u
e
s
t
 
a
c
c
e
s
s
 
d
i
s
a
b
l
e
d
)


 
 
-
 
"
O
n
e
-
t
i
m
e
 
r
e
s
p
o
n
s
e
s
"
 
(
p
r
e
v
e
n
t
 
r
e
-
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
)


-
 
A
N
D
 
c
a
n
 
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
 
t
h
e
 
s
u
r
v
e
y
 
v
i
a
 
U
R
L
 
(
`
/
l
i
m
e
s
u
r
v
e
y
/
i
n
d
e
x
.
p
h
p
/
s
u
r
v
e
y
/
{
s
u
r
v
e
y
I
d
}
/
n
e
w
t
e
s
t
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
 
S
t
u
d
e
n
t
 
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
r
v
e
y


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
n
 
a
c
t
i
v
e
 
s
u
r
v
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
 
s
t
u
d
e
n
t
 
s
u
b
m
i
t
s
 
r
e
s
p
o
n
s
e
s


-
 
T
H
E
N
 
r
e
s
p
o
n
s
e
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
 
t
h
e
 
`
l
i
m
e
s
u
r
v
e
y
`
 
M
a
r
i
a
D
B
 
D
B


-
 
A
N
D
 
t
h
e
 
s
u
r
v
e
y
 
i
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
 
(
u
n
l
e
s
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
 
t
o
 
c
o
l
l
e
c
t
 
u
s
e
r
 
I
D
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
 
c
a
n
n
o
t
 
r
e
s
u
b
m
i
t
 
(
i
f
 
o
n
e
-
t
i
m
e
 
r
e
s
p
o
n
s
e
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
 
L
D
A
P
 
b
i
n
d
 
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
 
(
N
O
T
 
O
I
D
C
)




L
i
m
e
S
u
r
v
e
y
 
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
 
*
*
d
i
r
e
c
t
 
L
D
A
P
 
b
i
n
d
*
*
 
t
o
 
O
p
e
n
L
D
A
P
,
 
N
O
T
 
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
 
O
I
D
C
.




L
i
m
e
S
u
r
v
e
y
'
s
 
L
D
A
P
 
p
l
u
g
i
n
 
b
i
n
d
s
 
t
o
 
O
p
e
n
L
D
A
P
 
a
t


`
l
d
a
p
:
/
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
l
d
a
p
.
o
p
e
n
d
e
s
k
-
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
 
a
n
d
 
v
e
r
i
f
i
e
s
 
c
r
e
d
e
n
t
i
a
l
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
 
L
D
A
P
 
b
i
n
d
 
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
 
`
s
t
u
d
e
n
t
1
2
3
`


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
 
l
o
g
s
 
i
n
 
t
o
 
L
i
m
e
S
u
r
v
e
y


-
 
T
H
E
N
 
L
i
m
e
S
u
r
v
e
y
'
s
 
L
D
A
P
 
p
l
u
g
i
n
 
a
t
t
e
m
p
t
s
 
a
 
b
i
n
d
 
t
o
 
O
p
e
n
L
D
A
P
:


 
 
-
 
B
i
n
d
 
D
N
:
 
`
u
i
d
=
s
t
u
d
e
n
t
1
2
3
,
o
u
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e
`


 
 
-
 
B
i
n
d
 
p
a
s
s
w
o
r
d
:
 
u
s
e
r
-
s
u
p
p
l
i
e
d
 
p
a
s
s
w
o
r
d


-
 
A
N
D
 
i
f
 
t
h
e
 
b
i
n
d
 
s
u
c
c
e
e
d
s
,
 
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


-
 
A
N
D
 
L
i
m
e
S
u
r
v
e
y
 
i
m
p
o
r
t
s
 
u
s
e
r
 
a
t
t
r
i
b
u
t
e
s
 
(
m
a
i
l
,
 
d
i
s
p
l
a
y
N
a
m
e
)
 
f
r
o
m
 
L
D
A
P


-
 
A
N
D
 
i
f
 
t
h
e
 
b
i
n
d
 
f
a
i
l
s
 
(
w
r
o
n
g
 
p
a
s
s
w
o
r
d
)
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
i
o
n
 
f
a
i
l
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
 
M
a
r
i
a
D
B
 
s
t
o
r
a
g
e




L
i
m
e
S
u
r
v
e
y
 
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
 
c
o
n
t
e
n
t
 
i
n
 
M
a
r
i
a
D
B
:


-
 
S
u
r
v
e
y
 
d
e
f
i
n
i
t
i
o
n
s
 
(
q
u
e
s
t
i
o
n
s
,
 
o
p
t
i
o
n
s
,
 
l
o
g
i
c
)


-
 
R
e
s
p
o
n
s
e
s
 
(
s
u
b
m
i
t
t
e
d
 
a
n
s
w
e
r
s
)


-
 
U
s
e
r
 
p
r
o
f
i
l
e
s
 
(
i
m
p
o
r
t
e
d
 
f
r
o
m
 
L
D
A
P
)


-
 
A
u
d
i
t
 
l
o
g
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
 
L
i
m
e
S
u
r
v
e
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
 
w
i
t
h
 
M
a
r
i
a
D
B


-
 
W
H
E
N
 
a
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
 
c
r
e
a
t
e
s
 
a
 
s
u
r
v
e
y
 
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
 
s
u
b
m
i
t
 
r
e
s
p
o
n
s
e
s


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
l
i
m
e
s
u
r
v
e
y
`
 
M
a
r
i
a
D
B
 
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
n
o
n
y
m
o
u
s
 
s
u
r
v
e
y
 
r
e
s
p
o
n
s
e
s




L
i
m
e
S
u
r
v
e
y
 
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
 
a
n
o
n
y
m
o
u
s
 
s
u
r
v
e
y
 
r
e
s
p
o
n
s
e
s
 
(
u
s
e
r
 
I
D
s
 
N
O
T
 
s
t
o
r
e
d
)
 
b
y


d
e
f
a
u
l
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
s
p
o
n
s
e
 
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
 
a
 
s
u
r
v
e
y
 
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
 
a
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
s
p
o
n
s
e
s


-
 
W
H
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
 
s
u
b
m
i
t
s
 
r
e
s
p
o
n
s
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
 
M
a
r
i
a
D
B
 
r
e
s
p
o
n
s
e
 
t
a
b
l
e
 
d
o
e
s
 
N
O
T
 
s
t
o
r
e
 
t
h
e
 
u
s
e
r
 
I
D


-
 
A
N
D
 
r
e
s
p
o
n
s
e
s
 
c
a
n
n
o
t
 
b
e
 
t
r
a
c
e
d
 
b
a
c
k
 
t
o
 
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
i
s
 
s
a
t
i
s
f
i
e
s
 
d
a
t
a
 
p
r
o
t
e
c
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
m
e
n
t
s
 
(
G
D
P
R
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
 
L
i
m
e
S
u
r
v
e
y
 
W
e
b
 
|
 
P
H
P
-
F
P
M
 
b
a
c
k
e
n
d
 
(
A
p
a
c
h
e
)
 
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
M
a
r
i
a
D
B
 
d
a
t
a
)
 
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
 
S
u
r
v
e
y
 
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
8
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
 
U
p
s
t
r
e
a
m
 
L
i
m
e
S
u
r
v
e
y
 
(
O
C
I
 
r
e
g
i
s
t
r
y
:
 
`
o
p
e
n
c
o
d
e
.
d
e
`
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
 
L
i
m
e
S
u
r
v
e
y
 
W
e
b
 
|
 
3
3
 
(
w
w
w
-
d
a
t
a
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
9
 
(
m
y
s
q
l
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
 
L
D
A
P
 
s
e
r
v
e
r
 
|
 
`
l
d
a
p
:
/
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
l
d
a
p
.
o
p
e
n
d
e
s
k
-
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
 
|


|
 
L
D
A
P
 
b
i
n
d
 
D
N
 
p
a
t
t
e
r
n
 
|
 
`
u
i
d
=
{
u
s
e
r
n
a
m
e
}
,
o
u
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e
`
 
|


|
 
L
D
A
P
 
a
t
t
r
i
b
u
t
e
 
m
a
p
p
i
n
g
 
|
 
`
m
a
i
l
 
→
 
e
m
a
i
l
`
,
 
`
d
i
s
p
l
a
y
N
a
m
e
 
→
 
n
a
m
e
`
 
|


|
 
L
D
A
P
 
g
r
o
u
p
 
f
i
l
t
e
r
 
|
 
`
(
m
e
m
b
e
r
O
f
=
c
n
=
l
i
m
e
s
u
r
v
e
y
-
a
d
m
i
n
s
,
c
n
=
g
r
o
u
p
s
,
.
.
.
)
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
l
i
m
e
s
u
r
v
e
y
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
 
u
s
e
r
 
|
 
`
l
i
m
e
s
u
r
v
e
y
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
 
8
G
i
 
(
m
a
r
i
a
d
b
 
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
D
i
r
e
c
t
 
L
D
A
P
 
b
i
n
d
*
*
:
 
L
i
m
e
S
u
r
v
e
y
 
d
o
e
s
 
N
O
T
 
u
s
e
 
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
.
 
I
t
 
d
i
r
e
c
t
l
y
 
b
i
n
d
s


 
 
t
o
 
O
p
e
n
L
D
A
P
.
 
T
h
i
s
 
m
e
a
n
s
 
u
s
e
r
 
p
r
o
f
i
l
e
s
 
a
r
e
 
N
O
T
 
s
y
n
c
e
d
 
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
 
g
r
o
u
p
 
a
t
t
r
i
b
u
t
e
s
.


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
 
M
a
r
i
a
D
B
*
*
:
 
T
h
e
 
L
i
m
e
S
u
r
v
e
y
 
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
 
M
a
r
i
a
D
B


 
 
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
 
M
a
r
i
a
D
B
 
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
.


-
 
*
*
A
n
o
n
y
m
o
u
s
 
b
y
 
d
e
f
a
u
l
t
*
*
:
 
S
u
r
v
e
y
s
 
a
r
e
 
a
n
o
n
y
m
o
u
s
 
b
y
 
d
e
f
a
u
l
t
.
 
D
a
t
a
 
p
r
o
t
e
c
t
i
o
n


 
 
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
 
i
s
 
a
c
h
i
e
v
e
d
 
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
 
(
n
o
 
u
s
e
r
 
I
D
 
s
t
o
r
a
g
e
 
i
n
 
r
e
s
p
o
n
s
e
s
)
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
L
D
A
P
 
B
i
n
d
/
S
e
a
r
c
h
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
l
d
a
p
-
b
i
n
d
-
a
n
d
-
s
e
a
r
c
h
)
 
—
 
u
s
e
r
 
d
i
r
e
c
t
o
r
y
 
l
o
o
k
u
p


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




O
p
e
n
L
D
A
P
 
(
d
i
r
e
c
t
 
b
i
n
d
)
,
 
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
,
 
n
o
t
 
r
o
l
e
-
b
a
s
e
d
 
—
 
L
D
A
P
 
g
r
o
u
p
 
f
i
l
t
e
r
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
s
u
r
v
e
y
 
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
5
0
0
m
s
 
(
s
u
r
v
e
y
 
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
 
A
p
a
c
h
e
 
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
3
0
0
m
s
 
(
r
e
s
p
o
n
s
e
 
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
)
 
|
 
L
i
m
e
S
u
r
v
e
y
 
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
 
A
p
a
c
h
e
 
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
D
A
P
 
A
u
t
h
 
S
u
c
c
e
s
s
*
*
 
|
 
>
9
9
%
 
(
L
D
A
P
 
b
i
n
d
)
 
|
 
L
D
A
P
 
a
c
c
e
s
s
 
l
o
g
 
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
 
L
i
m
e
S
u
r
v
e
y
 
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
 
L
D
A
P
 
b
i
n
d
 
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
 
s
u
r
v
e
y
 
r
e
s
p
o
n
d
e
n
t
s


-
 
1
0
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
 
s
u
r
v
e
y
s


-
 
5
0
,
0
0
0
 
r
e
s
p
o
n
s
e
s
 
p
e
r
 
m
o
n
t
h
 
(
t
y
p
i
c
a
l
)


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
M
a
r
i
a
D
B
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
S
u
r
v
e
y
 
d
a
t
a
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
 
M
a
r
i
a
D
B
 
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
 
L
i
m
e
S
u
r
v
e
y
 
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
 
L
D
A
P
 
b
i
n
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
 
s
u
r
v
e
y
,
 
s
u
b
m
i
t
 
r
e
s
p
o
n
s
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
 
S
u
r
v
e
y
 
d
e
f
i
n
i
t
i
o
n
s
 
a
n
d
 
q
u
e
s
t
i
o
n
s


-
 
U
s
e
r
 
r
e
s
p
o
n
s
e
s
 
a
n
d
 
s
t
a
t
i
s
t
i
c
s


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
 
L
D
A
P
 
b
i
n
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
 
s
u
r
v
e
y
/
r
e
s
p
o
n
s
e
 
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
L
D
A
P
 
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
v
e
r
i
f
y
 
L
D
A
P
 
b
i
n
d
 
D
N
s
,
 
t
e
s
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
 
L
D
A
P
 
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

