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
e
c
u
r
i
t
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




N
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
i
e
s
 
v
i
a
 
O
t
t
e
r
i
z
e
,
 
H
e
l
m
 
c
h
a
r
t
 
t
r
u
s
t
 
c
h
a
i
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
 
(
G
P
G
 
+
 
C
o
s
i
g
n
)
,


s
e
c
c
o
m
p
/
c
a
p
a
b
i
l
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
 
p
a
t
t
e
r
n
s
,
 
P
o
d
 
S
e
c
u
r
i
t
y
 
A
d
m
i
s
s
i
o
n
,
 
b
r
u
t
e
-
f
o
r
c
e


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
 
e
n
f
o
r
c
e
m
e
n
t
,
 
a
n
d
 
H
R
Z
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
e
c
u
r
i
t
y
 
e
x
t
e
n
s
i
o
n
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
 
A
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
l
e
v
e
l
 
a
u
t
h
o
r
i
z
a
t
i
o
n
 
p
o
l
i
c
i
e
s
 
(
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
 
B
a
c
k
u
p
 
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
 
N
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
i
e
s
 
v
i
a
 
O
t
t
e
r
i
z
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
 
e
n
f
o
r
c
e
 
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
i
e
s
 
b
y
 
t
r
a
n
s
l
a
t
i
n
g
 
O
t
t
e
r
i
z
e
 
C
l
i
e
n
t
I
n
t
e
n
t


a
n
d
 
S
e
r
v
e
r
I
n
t
e
n
t
 
r
e
s
o
u
r
c
e
s
 
i
n
t
o
 
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
 
N
e
t
w
o
r
k
P
o
l
i
c
i
e
s
.




`
s
e
c
u
r
i
t
y
.
o
t
t
e
r
i
z
e
I
n
t
e
n
t
s
.
e
n
a
b
l
e
d
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
e
`
 
i
n


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
a
p
p
s
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
s
e
r
v
i
c
e
s
/
v
a
l
u
e
s
-
o
t
t
e
r
i
z
e
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
e
r
v
i
c
e
 
a
c
c
e
s
s
 
c
o
n
t
r
o
l
 
e
n
f
o
r
c
e
d


-
 
G
I
V
E
N
 
O
t
t
e
r
i
z
e
 
i
n
t
e
n
t
s
 
o
p
e
r
a
t
o
r
 
i
n
s
t
a
l
l
e
d
 
w
i
t
h
 
`
s
e
c
u
r
i
t
y
.
o
t
t
e
r
i
z
e
I
n
t
e
n
t
s
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`


-
 
W
H
E
N
 
C
l
i
e
n
t
I
n
t
e
n
t
 
r
e
s
o
u
r
c
e
s
 
d
e
f
i
n
e
 
a
l
l
o
w
e
d
 
t
r
a
f
f
i
c
 
f
r
o
m
 
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
 
t
o
 
`
d
o
v
e
c
o
t
`


-
 
T
H
E
N
 
a
 
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
 
N
e
t
w
o
r
k
P
o
l
i
c
y
 
a
l
l
o
w
i
n
g
 
o
n
l
y
 
n
e
x
t
c
l
o
u
d
 
p
o
d
s
 
t
o
 
a
c
c
e
s
s
 
p
o
r
t
 
1
4
3
 
i
s
 
c
r
e
a
t
e
d


-
 
A
N
D
 
u
n
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
 
c
r
o
s
s
-
s
e
r
v
i
c
e
 
t
r
a
f
f
i
c
 
(
e
.
g
.
,
 
f
r
o
m
 
`
m
o
o
d
l
e
`
 
t
o
 
`
d
o
v
e
c
o
t
`
)
 
i
s
 
b
l
o
c
k
e
d


-
 
A
N
D
 
t
r
a
f
f
i
c
 
b
e
t
w
e
e
n
 
n
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
 
i
s
 
d
e
n
i
e
d
 
(
d
e
n
y
-
b
y
-
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
l
m
 
c
h
a
r
t
 
p
r
o
v
e
n
a
n
c
e
 
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




A
l
l
 
H
e
l
m
 
c
h
a
r
t
s
 
S
H
A
L
L
 
b
e
 
v
e
r
i
f
i
e
d
 
a
g
a
i
n
s
t
 
G
P
G
 
k
e
y
s
 
i
n
 
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
f
i
l
e
s
/
g
p
g
-
p
u
b
k
e
y
s
/
`


o
r
 
C
o
s
i
g
n
 
k
e
y
s
 
i
n
 
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
f
i
l
e
s
/
c
o
s
i
g
n
-
p
u
b
k
e
y
s
/
`
 
b
e
f
o
r
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
.




`
v
a
l
u
e
s
.
c
h
a
r
t
s
.
*
.
v
e
r
i
f
y
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
e
`
 
f
o
r
 
a
l
l
 
v
e
r
i
f
i
e
d
 
c
h
a
r
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
 
G
P
G
-
v
e
r
i
f
i
e
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
 
G
I
V
E
N
 
a
 
H
e
l
m
 
c
h
a
r
t
 
s
i
g
n
e
d
 
w
i
t
h
 
a
 
k
n
o
w
n
 
O
p
e
n
C
o
d
e
 
G
P
G
 
k
e
y


-
 
W
H
E
N
 
h
e
l
m
f
i
l
e
 
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
 
r
e
l
e
a
s
e
 
w
i
t
h
 
`
c
h
a
r
t
s
.
$
n
a
m
e
.
v
e
r
i
f
y
:
 
t
r
u
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
 
c
h
a
r
t
 
s
i
g
n
a
t
u
r
e
 
i
s
 
v
e
r
i
f
i
e
d
 
a
g
a
i
n
s
t
 
`
f
i
l
e
s
/
g
p
g
-
p
u
b
k
e
y
s
/
o
p
e
n
c
o
d
e
.
g
p
g
`


-
 
A
N
D
 
t
h
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
 
f
a
i
l
s
 
i
f
 
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
 
f
a
i
l
s
 
(
`
e
r
r
o
r
:
 
s
i
g
n
a
t
u
r
e
 
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
 
f
a
i
l
e
d
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
 
C
o
s
i
g
n
-
v
e
r
i
f
i
e
d
 
O
X
 
c
h
a
r
t
s


-
 
G
I
V
E
N
 
O
X
 
H
e
l
m
 
c
h
a
r
t
s
 
s
i
g
n
e
d
 
w
i
t
h
 
C
o
s
i
g
n


-
 
W
H
E
N
 
c
h
a
r
t
s
 
a
r
e
 
d
e
p
l
o
y
e
d
 
v
i
a
 
t
h
e
 
O
X
 
r
e
p
o


-
 
T
H
E
N
 
c
h
a
r
t
s
 
S
H
A
L
L
 
b
e
 
v
e
r
i
f
i
a
b
l
e
 
v
i
a
 
C
o
s
i
g
n
 
u
s
i
n
g
 
k
e
y
s
 
i
n
 
`
f
i
l
e
s
/
c
o
s
i
g
n
-
p
u
b
k
e
y
s
/
o
x
-
*
.
p
u
b
`


-
 
A
N
D
 
`
c
o
s
i
g
n
 
v
e
r
i
f
y
 
.
.
.
 
-
-
k
e
y
 
f
i
l
e
s
/
c
o
s
i
g
n
-
p
u
b
k
e
y
s
/
o
x
-
*
.
p
u
b
`
 
p
r
o
d
u
c
e
s
 
v
a
l
i
d
 
o
u
t
p
u
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
 
P
o
d
 
S
e
c
u
r
i
t
y
 
A
d
m
i
s
s
i
o
n
 
(
P
S
A
)
 
e
n
f
o
r
c
e
m
e
n
t




A
l
l
 
p
o
d
s
 
S
H
A
L
L
 
c
o
n
f
o
r
m
 
t
o
 
P
o
d
 
S
e
c
u
r
i
t
y
 
S
t
a
n
d
a
r
d
 
`
b
a
s
e
l
i
n
e
`
 
o
r
 
`
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
`
.


P
r
i
v
i
l
e
g
e
d
 
p
o
d
s
 
S
H
A
L
L
 
b
e
 
e
x
p
l
i
c
i
t
l
y
 
e
x
e
m
p
t
e
d
 
w
i
t
h
 
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
.




C
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
 
c
o
n
t
e
x
t
 
p
a
t
t
e
r
n
s
:


-
 
*
*
L
e
a
s
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
*
*
:
 
N
o
n
-
r
o
o
t
 
(
u
i
d
 
>
=
 
1
0
0
0
)
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
i
l
e
s
y
s
t
e
m
,
 
A
L
L
 
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
 
d
r
o
p
p
e
d
 
w
h
e
r
e
 
p
o
s
s
i
b
l
e


-
 
*
*
H
a
r
d
e
n
i
n
g
*
*
:
 
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
,
 
N
O
 
N
E
W
 
P
R
I
V
I
L
E
G
E
S


-
 
*
*
E
x
e
m
p
t
i
o
n
s
*
*
:
 
M
e
d
i
a
 
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
 
(
J
i
b
r
i
,
 
J
V
B
,
 
J
i
c
o
f
o
,
 
P
r
o
s
o
d
y
)
 
r
u
n
 
a
s
 
u
i
d
 
0
 
f
o
r
 
r
a
w
 
a
c
c
e
s
s
;
 
J
i
b
r
i
 
r
e
q
u
i
r
e
s
 
S
Y
S
_
A
D
M
I
N




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
 
s
e
r
v
i
c
e
 
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
 
a
 
w
e
b
 
s
e
r
v
i
c
e
 
c
o
n
t
a
i
n
e
r
 
(
e
.
g
.
,
 
J
i
t
s
i
 
J
a
v
a
 
a
d
a
p
t
e
r
)


-
 
W
H
E
N
 
t
h
e
 
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
 
i
t
 
r
u
n
s
 
a
s
 
u
i
d
 
1
9
9
3
 
(
n
o
n
-
r
o
o
t
)


-
 
A
N
D
 
t
h
e
 
r
o
o
t
 
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
 
i
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


-
 
A
N
D
 
`
a
l
l
o
w
P
r
i
v
i
l
e
g
e
E
s
c
a
l
a
t
i
o
n
:
 
f
a
l
s
e
`


-
 
A
N
D
 
A
L
L
 
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
 
d
r
o
p
p
e
d




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
d
i
a
 
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
 
e
x
c
e
p
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
 
J
i
b
r
i
 
c
o
n
t
a
i
n
e
r
 
f
o
r
 
C
h
r
o
m
e
 
h
e
a
d
l
e
s
s
 
r
e
c
o
r
d
i
n
g


-
 
W
H
E
N
 
t
h
e
 
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
 
i
t
 
r
u
n
s
 
a
s
 
u
i
d
 
0
 
(
r
o
o
t
 
r
e
q
u
i
r
e
d
 
f
o
r
 
X
1
1
 
/
d
e
v
/
v
i
d
e
o
)


-
 
A
N
D
 
h
a
s
 
o
n
l
y
 
`
S
Y
S
_
A
D
M
I
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
y
 
(
a
l
l
 
o
t
h
e
r
s
 
d
r
o
p
p
e
d
)


-
 
A
N
D
 
u
s
e
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
c
o
m
p
 
p
a
t
t
e
r
n
s




A
l
l
 
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
 
S
H
A
L
L
 
u
s
e
 
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
s
 
f
r
o
m
 
t
h
e
 
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
 
n
o
d
e
'
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
 
u
n
l
e
s
s
 
a
 
c
u
s
t
o
m
 
p
r
o
f
i
l
e
 
i
s
 
r
e
q
u
i
r
e
d
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
 
a
p
p
l
i
e
d


-
 
G
I
V
E
N
 
a
 
c
o
n
t
a
i
n
e
r
 
w
i
t
h
 
`
s
e
c
c
o
m
p
P
r
o
f
i
l
e
.
t
y
p
e
:
 
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


-
 
W
H
E
N
 
t
h
e
 
c
o
n
t
a
i
n
e
r
 
e
x
e
c
u
t
e
s
 
a
 
s
y
s
c
a
l
l
 
b
l
o
c
k
e
d
 
b
y
 
t
h
e
 
p
r
o
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
 
s
y
s
c
a
l
l
 
r
e
t
u
r
n
s
 
E
P
E
R
M


-
 
A
N
D
 
t
h
e
 
c
o
n
t
a
i
n
e
r
 
l
o
g
s
 
t
h
e
 
s
y
s
c
a
l
l
 
v
i
o
l
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




C
o
n
t
a
i
n
e
r
s
 
S
H
A
L
L
 
d
r
o
p
 
a
l
l
 
L
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
 
u
n
l
e
s
s
 
e
x
p
l
i
c
i
t
l
y
 
r
e
q
u
i
r
e
d
:




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
y
 
|
 
R
e
q
u
i
r
e
d
 
B
y
 
|
 
R
e
a
s
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


|
 
A
L
L
 
(
d
r
o
p
)
 
|
 
M
o
s
t
 
s
e
r
v
i
c
e
s
 
|
 
L
e
a
s
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
 
|


|
 
S
Y
S
_
A
D
M
I
N
 
|
 
J
i
b
r
i
 
|
 
C
h
r
o
m
e
 
h
e
a
d
l
e
s
s
 
(
s
c
r
e
e
n
 
r
e
c
o
r
d
i
n
g
)
 
|


|
 
C
H
O
W
N
 
/
 
F
O
W
N
E
R
 
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
 
I
/
O
 
w
i
t
h
 
u
s
e
r
 
i
s
o
l
a
t
i
o
n
 
|


|
 
S
E
T
U
I
D
 
/
 
S
E
T
G
I
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
 
p
o
d
s
 
(
M
a
r
i
a
D
B
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
 
|
 
I
n
i
t
 
s
c
r
i
p
t
s
 
|




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
 
h
a
r
d
e
n
i
n
g
 
r
e
v
i
e
w


-
 
G
I
V
E
N
 
a
l
l
 
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
 
c
o
n
t
e
x
t
s
 
r
e
v
i
e
w
e
d


-
 
W
H
E
N
 
a
 
c
o
n
t
a
i
n
e
r
 
l
i
s
t
 
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
 
T
H
E
N
 
9
0
%
+
 
o
f
 
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
 
h
a
v
e
 
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
"
A
L
L
"
]
`


-
 
A
N
D
 
e
x
c
e
p
t
i
o
n
s
 
a
r
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
r
e
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




A
l
l
 
s
e
c
r
e
t
s
 
S
H
A
L
L
 
b
e
 
s
t
o
r
e
d
 
i
n
 
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
 
s
e
c
r
e
t
s
,
 
N
E
V
E
R
 
i
n
 
v
a
l
u
e
s
 
f
i
l
e
s
 
(
e
v
e
n


t
e
m
p
l
a
t
e
d
)
.
 
D
e
r
i
v
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
s
 
u
s
e
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
`
 
f
r
o
m
 
`
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
`
 
e
n
v
i
r
o
n
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
 
S
e
c
r
e
t
 
n
o
t
 
i
n
 
v
a
l
u
e
s


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
 
p
a
s
s
w
o
r
d
 
f
i
e
l
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
a
s
s
w
o
r
d
 
i
s
 
s
e
t


-
 
T
H
E
N
 
i
t
 
i
s
 
e
i
t
h
e
r


 
 
-
 
D
e
r
i
v
e
d
:
 
`
{
{
 
d
e
r
i
v
e
P
a
s
s
w
o
r
d
 
1
 
"
l
o
n
g
"
 
(
e
n
v
 
"
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
"
 
|
 
d
e
f
a
u
l
t
 
"
s
o
v
e
r
e
i
g
n
-
w
o
r
k
p
l
a
c
e
"
)
 
"
$
a
p
p
"
 
"
$
k
e
y
"
 
|
 
s
h
a
1
s
u
m
 
|
 
q
u
o
t
e
 
}
}
`


 
 
-
 
O
r
 
f
r
o
m
 
a
 
`
s
e
c
r
e
t
K
e
y
R
e
f
`
:
 
`
v
a
l
u
e
F
r
o
m
.
s
e
c
r
e
t
K
e
y
R
e
f
.
n
a
m
e
:
 
"
$
a
p
p
-
s
e
c
r
e
t
s
"
`




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
 
B
r
u
t
e
-
f
o
r
c
e
 
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
 
e
n
f
o
r
c
e
m
e
n
t




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
 
e
n
f
o
r
c
e
 
b
r
u
t
e
-
f
o
r
c
e
 
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
 
a
t
 
t
h
e
 
I
d
P
 
a
n
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


l
e
v
e
l
.
 
D
i
s
a
b
l
i
n
g
 
b
r
u
t
e
-
f
o
r
c
e
 
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
 
i
n
 
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
 
i
s
 
N
E
V
E
R
 
p
e
r
m
i
t
t
e
d
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
 
K
e
y
c
l
o
a
k
 
r
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


-
 
G
I
V
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
 
b
r
u
t
e
-
f
o
r
c
e
 
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


-
 
W
H
E
N
 
m
o
r
e
 
t
h
a
n
 
3
0
 
f
a
i
l
e
d
 
l
o
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
 
o
c
c
u
r
 
f
r
o
m
 
t
h
e
 
s
a
m
e
 
I
P
 
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


-
 
T
H
E
N
 
s
u
b
s
e
q
u
e
n
t
 
r
e
q
u
e
s
t
s
 
f
r
o
m
 
t
h
a
t
 
I
P
 
a
r
e
 
b
l
o
c
k
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
l
o
c
k
i
n
g
 
p
e
r
s
i
s
t
s
 
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
 
(
c
o
n
f
i
g
u
r
a
b
l
e
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
 
O
C
C
 
b
r
u
t
e
-
f
o
r
c
e
 
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


-
 
G
I
V
E
N
 
`
a
u
t
h
.
b
r
u
t
e
f
o
r
c
e
.
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
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`
 
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
 
c
o
n
f
i
g


-
 
W
H
E
N
 
t
h
e
 
t
h
r
e
s
h
o
l
d
 
i
s
 
e
x
c
e
e
d
e
d


-
 
T
H
E
N
 
t
h
e
 
I
P
 
i
s
 
b
l
o
c
k
e
d
 
v
i
a
 
f
a
i
l
2
b
a
n
-
s
t
y
l
e
 
r
u
l
e
s


-
 
A
N
D
 
t
h
e
 
a
d
m
i
n
 
r
e
c
e
i
v
e
s
 
a
n
 
a
l
e
r
t




#
#
 
A
n
t
i
-
P
a
t
t
e
r
n
s




-
 
N
E
V
E
R
 
d
i
s
a
b
l
e
 
b
r
u
t
e
-
f
o
r
c
e
 
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
 
i
n
 
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


-
 
N
E
V
E
R
 
s
h
i
p
 
s
e
c
r
e
t
s
 
i
n
 
v
a
l
u
e
s
 
f
i
l
e
s
 
(
u
s
e
 
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
 
s
e
c
r
e
t
s
)


-
 
N
E
V
E
R
 
r
u
n
 
p
o
d
s
 
w
i
t
h
 
`
s
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
.
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
:
 
t
r
u
e
`
 
u
n
l
e
s
s
 
a
b
s
o
l
u
t
e
l
y
 
r
e
q
u
i
r
e
d


-
 
N
E
V
E
R
 
m
o
u
n
t
 
h
o
s
t
 
p
a
t
h
s
 
o
r
 
h
o
s
t
 
P
I
D
s


-
 
N
E
V
E
R
 
u
s
e
 
`
a
l
l
o
w
P
r
i
v
i
l
e
g
e
E
s
c
a
l
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
 
w
i
t
h
o
u
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
 
j
u
s
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
 
O
t
t
e
r
i
z
e
 
i
n
t
e
n
t
s
 
o
p
e
r
a
t
o
r
 
(
`
s
e
c
u
r
i
t
y
.
o
t
t
e
r
i
z
e
I
n
t
e
n
t
s
.
e
n
a
b
l
e
d
`
)


-
 
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
 
P
S
A
 
(
`
p
o
d
-
s
e
c
u
r
i
t
y
.
k
u
b
e
r
n
e
t
e
s
.
i
o
/
e
n
f
o
r
c
e
:
 
b
a
s
e
l
i
n
e
`
)


-
 
G
P
G
 
k
e
y
s
 
(
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
f
i
l
e
s
/
g
p
g
-
p
u
b
k
e
y
s
/
o
p
e
n
c
o
d
e
.
g
p
g
`
)


-
 
C
o
s
i
g
n
 
k
e
y
s
 
(
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
f
i
l
e
s
/
c
o
s
i
g
n
-
p
u
b
k
e
y
s
/
`
)


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
b
r
u
t
e
-
f
o
r
c
e
 
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
 
e
x
t
e
n
s
i
o
n
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
S
e
c
u
r
i
t
y
 
T
h
r
e
a
t
 
M
o
d
e
l
]
(
.
/
t
h
r
e
a
t
-
m
o
d
e
l
/
)
 
(
t
h
r
e
a
t
 
m
i
t
i
g
a
t
i
o
n
s
)


-
 
[
C
o
m
p
l
i
a
n
c
e
 
C
h
e
c
k
l
i
s
t
s
]
(
.
/
s
e
c
u
r
i
t
y
/
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
-
c
h
e
c
k
l
i
s
t
s
/
)
 
(
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
 
s
t
e
p
s
)


-
 
[
D
e
p
l
o
y
m
e
n
t
]
(
.
/
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
/
)
 
(
P
S
A
 
e
n
f
o
r
c
e
m
e
n
t
,
 
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
 
p
a
t
t
e
r
n
s
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
n
e
t
w
o
r
k
 
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
)




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
 
P
a
t
t
e
r
n
s
 
b
y
 
T
i
e
r




|
 
T
i
e
r
 
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
 
R
e
a
d
O
n
l
y
R
o
o
t
F
S
 
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
 
C
r
i
t
i
c
a
l
 
|
 
>
 
1
0
0
0
 
|
 
t
r
u
e
 
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
 
H
i
g
h
 
|
 
>
 
1
0
0
0
 
(
o
r
 
0
 
i
f
 
r
e
q
u
i
r
e
d
,
 
e
.
g
.
,
 
P
o
s
t
f
i
x
/
D
o
v
e
c
o
t
)
 
|
 
t
r
u
e
 
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
 
S
t
a
n
d
a
r
d
 
|
 
>
 
1
0
0
0
 
|
 
f
a
l
s
e
 
(
i
f
 
w
r
i
t
a
b
l
e
 
n
e
e
d
e
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


|
 
L
o
w
 
|
 
>
 
1
0
0
0
 
|
 
f
a
l
s
e
 
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
 
E
x
e
m
p
t
i
o
n
 
(
J
i
b
r
i
)
 
|
 
0
 
|
 
f
a
l
s
e
 
|
 
a
d
d
:
 
S
Y
S
_
A
D
M
I
N
 
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
 
O
t
t
e
r
i
z
e
 
I
n
t
e
n
t
 
E
x
a
m
p
l
e
s




`
`
`
y
a
m
l


#
 
C
l
i
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
 
w
a
n
t
s
 
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
g
a
i
n
s
t
 
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


a
p
i
V
e
r
s
i
o
n
:
 
i
n
t
e
n
t
.
o
t
o
r
o
s
.
i
o
/
v
1
a
l
p
h
a
1


k
i
n
d
:
 
C
l
i
e
n
t
I
n
t
e
n
t


m
e
t
a
d
a
t
a
:


 
 
n
a
m
e
:
 
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
o
v
e
c
o
t
-
i
m
a
p


s
p
e
c
:


 
 
s
e
r
v
i
c
e
:


 
 
 
 
n
a
m
e
:
 
n
e
x
t
c
l
o
u
d


 
 
c
a
l
l
s
:


 
 
 
 
-
 
n
a
m
e
:
 
d
o
v
e
c
o
t


 
 
 
 
 
 
t
y
p
e
:
 
p
o
d


 
 
 
 
 
 
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
s
:


 
 
 
 
 
 
 
 
p
o
r
t
s
:


 
 
 
 
 
 
 
 
 
 
-
 
p
o
r
t
:
 
1
4
3
 
#
 
I
M
A
P
 
p
l
a
i
n
 
(
T
L
S
 
u
p
g
r
a
d
e
)


 
 
 
 
 
 
 
 
 
 
-
 
p
o
r
t
:
 
9
9
3
 
#
 
I
M
A
P
 
T
L
S


`
`
`




`
`
`
y
a
m
l


#
 
S
e
r
v
e
r
:
 
D
o
v
e
c
o
t
 
e
x
p
l
i
c
i
t
l
y
 
a
l
l
o
w
i
n
g
 
I
M
A
P
 
t
r
a
f
f
i
c


a
p
i
V
e
r
s
i
o
n
:
 
i
n
t
e
n
t
.
o
t
o
r
o
s
.
i
o
/
v
1
a
l
p
h
a
1


k
i
n
d
:
 
S
e
r
v
e
r
I
n
t
e
n
t


m
e
t
a
d
a
t
a
:


 
 
n
a
m
e
:
 
d
o
v
e
c
o
t
-
i
m
a
p


s
p
e
c
:


 
 
s
e
r
v
i
c
e
:


 
 
 
 
n
a
m
e
:
 
d
o
v
e
c
o
t


 
 
t
y
p
e
:
 
p
o
d


 
 
p
o
r
t
:
 
1
4
3


`
`
`

