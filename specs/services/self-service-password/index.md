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
l
f
-
S
e
r
v
i
c
e
 
P
a
s
s
w
o
r
d
 
(
L
T
B
 
S
S
P
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




L
D
A
P
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
t
o
o
l
 
(
L
T
B
 
S
e
l
f
-
S
e
r
v
i
c
e
 
P
a
s
s
w
o
r
d
)
 
a
l
l
o
w
i
n
g
 
u
s
e
r
s
 
t
o
 
c
h
a
n
g
e


t
h
e
i
r
 
O
p
e
n
L
D
A
P
 
d
i
r
e
c
t
o
r
y
 
p
a
s
s
w
o
r
d
 
w
i
t
h
o
u
t
 
h
e
l
p
d
e
s
k
 
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
.
 
U
s
e
r
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
 
w
i
t
h
 
t
h
e
i
r
 
c
u
r
r
e
n
t
 
L
D
A
P
 
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
 
a
n
d
 
s
e
t
 
a
 
n
e
w
 
p
a
s
s
w
o
r
d
 
m
e
e
t
i
n
g


L
D
A
P
 
p
o
l
i
c
y
 
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
T
B
 
S
e
l
f
-
S
e
r
v
i
c
e
 
P
a
s
s
w
o
r
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
,
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
v
i
a
 
c
u
r
r
e
n
t
 
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
 
L
D
A
P
 
p
o
l
i
c
y
 
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
 
O
p
e
n
L
D
A
P
 
d
i
r
e
c
t
o
r
y
 
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
 
w
e
b
-
b
a
s
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
 
c
h
a
n
g
e
 
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
 
K
e
y
c
l
o
a
k
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
(
S
S
P
 
c
h
a
n
g
e
s
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
o
n
l
y
)
,
 
m
u
l
t
i
-
f
a
c
t
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
 
f
o
r
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
s
,
 
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
h
r
o
n
i
z
a
t
i
o
n
 
b
e
t
w
e
e
n
 
L
D
A
P
 
a
n
d
 
K
e
y
c
l
o
a
k




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
 
K
e
y
c
l
o
a
k
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
(
S
S
P
 
c
h
a
n
g
e
s
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
o
n
l
y
 
—
 
K
e
y
c
l
o
a
k


 
 
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
)


-
 
M
u
l
t
i
-
f
a
c
t
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
 
f
o
r
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
s




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
 
P
a
s
s
w
o
r
d
 
r
e
s
e
t
 
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




U
s
e
r
s
 
S
H
A
L
L
 
r
e
s
e
t
 
t
h
e
i
r
 
p
a
s
s
w
o
r
d
 
b
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
n
g
 
w
i
t
h
 
t
h
e
 
c
u
r
r
e
n
t
 
p
a
s
s
w
o
r
d


(
D
I
R
E
C
T
 
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
 
O
p
e
n
L
D
A
P
)
 
a
n
d
 
p
r
o
v
i
d
i
n
g
 
a
 
n
e
w
 
p
a
s
s
w
o
r
d
 
m
e
e
t
i
n
g
 
L
D
A
P


p
a
s
s
w
o
r
d
 
p
o
l
i
c
y
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
u
c
c
e
s
s
f
u
l
 
p
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
h
o
 
k
n
o
w
s
 
t
h
e
i
r
 
c
u
r
r
e
n
t
 
L
D
A
P
 
p
a
s
s
w
o
r
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
s
s
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
 
A
N
D
 
e
n
t
e
r
s
 
t
h
e
 
c
u
r
r
e
n
t
 
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
 
e
n
t
e
r
s
 
a
 
n
e
w
 
v
a
l
i
d
 
p
a
s
s
w
o
r
d
 
(
m
e
e
t
s
 
p
o
l
i
c
y
:
 
1
2
+
 
c
h
a
r
s
,
 
m
i
x
e
d
 
c
a
s
e
,
 
n
u
m
b
e
r
)


-
 
T
H
E
N
 
S
S
P
 
p
e
r
f
o
r
m
s
 
a
n
 
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
 
v
e
r
i
f
y
 
t
h
e
 
c
u
r
r
e
n
t
 
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
 
u
p
d
a
t
e
s
 
t
h
e
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
v
i
a
 
L
D
A
P
 
m
o
d
i
f
y
 
o
p
e
r
a
t
i
o
n
 
(
`
u
s
e
r
P
a
s
s
w
o
r
d
`
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
 
c
a
n
 
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
 
w
i
t
h
 
t
h
e
 
n
e
w
 
p
a
s
s
w
o
r
d
 
v
i
a
 
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
 
P
a
s
s
w
o
r
d
 
p
o
l
i
c
y
 
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
 
s
e
t
 
a
 
w
e
a
k
 
p
a
s
s
w
o
r
d
 
(
e
.
g
.
,
 
"
p
a
s
s
w
o
r
d
1
2
3
"
)


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
u
b
m
i
t
s
 
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
 
c
h
a
n
g
e
 
f
o
r
m


-
 
T
H
E
N
 
S
S
P
 
a
p
p
l
i
e
s
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
p
o
l
i
c
y
 
c
h
e
c
k
s


-
 
A
N
D
 
t
h
e
 
c
h
a
n
g
e
 
i
s
 
r
e
j
e
c
t
e
d
 
w
i
t
h
 
a
n
 
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
 
(
e
.
g
.
,
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
b
e
 
1
2
+
 
c
h
a
r
a
c
t
e
r
s
"
)


-
 
A
N
D
 
t
h
e
 
L
D
A
P
 
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
 
N
O
T
 
u
p
d
a
t
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
 
F
a
i
l
e
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
w
r
o
n
g
 
c
u
r
r
e
n
t
 
p
a
s
s
w
o
r
d
)


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
n
t
e
r
i
n
g
 
a
n
 
i
n
c
o
r
r
e
c
t
 
c
u
r
r
e
n
t
 
p
a
s
s
w
o
r
d


-
 
W
H
E
N
 
t
h
e
 
b
i
n
d
 
a
t
t
e
m
p
t
 
f
a
i
l
s


-
 
T
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
 
c
h
a
n
g
e
 
i
s
 
d
e
n
i
e
d


-
 
A
N
D
 
n
o
 
i
n
f
o
r
m
a
t
i
o
n
 
a
b
o
u
t
 
w
h
e
t
h
e
r
 
t
h
e
 
a
c
c
o
u
n
t
 
e
x
i
s
t
s
 
i
s
 
r
e
v
e
a
l
e
d
 
(
u
s
e
r
n
a
m
e
 
e
n
u
m
e
r
a
t
i
o
n
 
p
r
e
v
e
n
t
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




S
S
P
 
S
H
A
L
L
 
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
 
a
n
d
 
m
o
d
i
f
y
 
u
s
e
r
 
e
n
t
r
i
e
s


u
n
d
e
r
 
`
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
n
t
e
r
i
n
g
 
t
h
e
i
r
 
u
s
e
r
n
a
m
e
 
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
 
a
n
d
 
c
u
r
r
e
n
t
 
p
a
s
s
w
o
r
d


-
 
W
H
E
N
 
S
S
P
 
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


-
 
T
H
E
N
 
t
h
e
 
b
i
n
d
 
D
N
 
i
s
 
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
 
A
N
D
 
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
 
t
h
e
 
c
u
r
r
e
n
t
 
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
 
m
o
d
i
f
y
 
f
o
r
 
p
a
s
s
w
o
r
d
 
u
p
d
a
t
e


-
 
G
I
V
E
N
 
a
 
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
 
a
 
n
e
w
 
p
a
s
s
w
o
r
d


-
 
W
H
E
N
 
S
S
P
 
p
e
r
f
o
r
m
s
 
a
n
 
L
D
A
P
 
m
o
d
i
f
y
 
o
p
e
r
a
t
i
o
n


-
 
T
H
E
N
 
t
h
e
 
`
u
s
e
r
P
a
s
s
w
o
r
d
`
 
a
t
t
r
i
b
u
t
e
 
i
s
 
u
p
d
a
t
e
d
 
w
i
t
h
 
t
h
e
 
n
e
w
 
p
a
s
s
w
o
r
d
 
(
h
a
s
h
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
 
c
h
a
n
g
e
 
i
s
 
a
p
p
l
i
e
d
 
t
o
 
t
h
e
 
O
p
e
n
L
D
A
P
 
d
i
r
e
c
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
 
K
e
y
c
l
o
a
k
 
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
c
e




S
S
P
 
c
h
a
n
g
e
s
 
t
h
e
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
O
N
L
Y
.
 
K
e
y
c
l
o
a
k
 
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
 
a
r
e
 
N
O
T
 
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
p
d
a
t
e
d
.
 
U
s
e
r
s
 
m
u
s
t
 
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
e
 
w
i
t
h
 
t
h
e
 
n
e
w
 
p
a
s
s
w
o
r
d
 
a
t
 
n
e
x
t
 
K
e
y
c
l
o
a
k
 
l
o
g
i
n


(
K
e
y
c
l
o
a
k
 
v
a
l
i
d
a
t
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
 
a
g
a
i
n
s
t
 
O
p
e
n
L
D
A
P
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
 
L
D
A
P
 
p
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
d
,
 
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
i
l
l
 
w
o
r
k
s


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
 
c
h
a
n
g
e
s
 
t
h
e
i
r
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
v
i
a
 
S
S
P


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
 
n
e
x
t
 
l
o
g
s
 
i
n
t
o
 
a
 
s
e
r
v
i
c
e
 
u
s
i
n
g
 
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
 
v
a
l
i
d
a
t
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
 
a
g
a
i
n
s
t
 
O
p
e
n
L
D
A
P
 
(
b
i
n
d
 
a
s
 
u
s
e
r
)


-
 
A
N
D
 
t
h
e
 
n
e
w
 
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
 
a
c
c
e
p
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
 
(
-
k
e
y
c
l
o
a
k
 
s
h
a
r
e
s
 
t
h
e
 
s
a
m
e
 
L
D
A
P
 
d
i
r
e
c
t
o
r
y
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
 
S
S
P
 
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
 
S
S
P
 
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
 
P
a
s
s
w
o
r
d
 
p
o
l
i
c
y
 
|
 
1
2
+
 
c
h
a
r
s
,
 
m
i
x
e
d
 
c
a
s
e
,
 
n
u
m
b
e
r
,
 
s
p
e
c
i
a
l
 
c
h
a
r
a
c
t
e
r
 
|


|
 
I
n
g
r
e
s
s
 
h
o
s
t
 
|
 
`
s
s
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
s
e
l
f
-
s
e
r
v
i
c
e
-
p
a
s
s
w
o
r
d
/
`
 
(
c
u
s
t
o
m
)
 
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
N
o
 
L
D
A
P
 
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
*
*
:
 
S
S
P
 
u
p
d
a
t
e
s
 
t
h
e
 
L
D
A
P
 
p
a
s
s
w
o
r
d
,
 
b
u
t


 
 
K
e
y
c
l
o
a
k
 
v
a
l
i
d
a
t
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
 
a
g
a
i
n
s
t
 
L
D
A
P
 
o
n
 
e
a
c
h
 
l
o
g
i
n
.
 
N
o
 
s
y
n
c
 
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


 
 
—
 
t
h
e
 
n
e
w
 
p
a
s
s
w
o
r
d
 
w
o
r
k
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
.


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
 
S
S
P
 
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
 
i
s
 
i
n
t
e
n
t
i
o
n
a
l
 
f
o
r
 
p
a
s
s
w
o
r
d
 
s
e
c
u
r
i
t
y
 
(
d
i
r
e
c
t
 
t
o
 
s
o
u
r
c
e
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
,
 
K
e
y
c
l
o
a
k
 
(
v
a
l
i
d
a
t
e
s
 
a
g
a
i
n
s
t
 
L
D
A
P
 
o
n
 
e
a
c
h
 
l
o
g
i
n
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
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
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
3
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
5
0
0
m
s
 
(
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
o
p
e
r
a
t
i
o
n
)
 
|
 
L
D
A
P
 
b
i
n
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
 
B
i
n
d
 
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
c
u
r
r
e
n
t
 
p
a
s
s
w
o
r
d
 
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
 
S
S
P
 
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
 
L
D
A
P
 
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
 
(
p
a
s
s
w
o
r
d
 
r
e
s
e
t
s
)


-
 
1
,
0
0
0
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
s
 
p
e
r
 
d
a
y
 
(
p
e
a
k
:
 
s
t
a
r
t
 
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
 
N
/
A
 
-
 
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
U
s
e
r
 
d
a
t
a
*
*
:
 
N
O
N
E
 
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
 
s
e
r
v
i
c
e
,
 
a
l
l
 
d
a
t
a
 
i
n
 
L
D
A
P
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
 
S
S
P
 
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
 
5
 
m
i
n


2
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
 
3
 
m
i
n


3
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
p
a
s
s
w
o
r
d
 
r
e
s
e
t
 
f
l
o
w
)
 
-
 
5
 
m
i
n


4
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
 
a
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


-
 
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
 
P
a
s
s
w
o
r
d
 
p
o
l
i
c
y
 
s
e
t
t
i
n
g
s




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
 
b
i
n
d
 
D
N
/
p
a
s
s
w
o
r
d
,
 
t
e
s
t
 
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
 
(
n
o
 
d
a
t
a
 
t
o
 
r
e
s
t
o
r
e
)

