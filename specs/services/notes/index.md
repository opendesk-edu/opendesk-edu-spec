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
 
N
o
t
e
s
 
(
i
m
.
p
r
e
s
s
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




C
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
 
n
o
t
e
-
t
a
k
i
n
g
 
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
 
(
i
m
.
p
r
e
s
s
/
N
o
t
e
s
)
 
w
i
t
h
 
D
j
a
n
g
o
 
b
a
c
k
e
n
d
,


R
e
a
c
t
 
f
r
o
n
t
e
n
d
,
 
a
n
d
 
s
e
p
a
r
a
t
e
 
Y
-
P
r
o
v
i
d
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
o
n
 
s
e
r
v
i
c
e
.
 
F
e
a
t
u
r
e
s
 
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
,
 
S
3
 
n
o
t
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
s
,
 
A
I
 
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
 
m
o
d
e
l
/
e
n
d
p
o
i
n
t
)
,
 
r
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
o
n
 
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
,
 
a
n
d


R
e
d
i
s
 
f
o
r
 
D
j
a
n
g
o
 
c
a
c
h
e
.




N
o
t
e
s
 
u
s
e
s
 
a
 
s
p
l
i
t
 
a
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
:
 
`
i
m
p
r
e
s
s
-
b
a
c
k
e
n
d
`
 
(
D
j
a
n
g
o
 
R
E
S
T
 
A
P
I
 
+
 
C
e
l
e
r
y
)
,


`
i
m
p
r
e
s
s
-
f
r
o
n
t
e
n
d
`
 
(
R
e
a
c
t
 
S
P
A
 
s
e
r
v
e
d
 
b
y
 
N
g
i
n
x
)
,
 
a
n
d
 
`
i
m
p
r
e
s
s
-
y
-
p
r
o
v
i
d
e
r
`


(
r
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
o
n
 
v
i
a
 
Y
j
s
/
W
e
b
S
o
c
k
e
t
)
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
 
N
o
t
e
s
 
(
i
m
.
p
r
e
s
s
)
 
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
 
n
o
t
e
-
t
a
k
i
n
g
 
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
 
D
j
a
n
g
o
 
R
E
S
T
 
A
P
I
 
b
a
c
k
e
n
d
,
 
R
e
a
c
t
 
f
r
o
n
t
e
n
d
,
 
Y
-
P
r
o
v
i
d
e
r
 
r
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
o
n
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
,
 
S
3
 
n
o
t
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
s
,
 
A
I
 
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
 
m
o
d
e
l
/
e
n
d
p
o
i
n
t
)
,
 
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
 
P
r
e
s
e
n
t
a
t
i
o
n
 
s
l
i
d
e
s
 
(
s
e
e
 
C
r
y
p
t
P
a
d
)
,
 
k
n
o
w
l
e
d
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
 
(
s
e
e
 
X
W
i
k
i
 
o
r
 
B
o
o
k
S
t
a
c
k
)
,
 
c
u
s
t
o
m
 
n
o
t
e
 
t
e
m
p
l
a
t
e
s
,
 
m
o
b
i
l
e
 
a
p
p
 
d
e
v
e
l
o
p
m
e
n
t




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
 
P
r
e
s
e
n
t
a
t
i
o
n
 
s
l
i
d
e
s
 
(
s
e
e
 
C
r
y
p
t
P
a
d
 
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
-
o
n
l
y
 
e
d
i
t
i
n
g
)


-
 
K
n
o
w
l
e
d
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
 
(
s
e
e
 
X
W
i
k
i
 
o
r
 
B
o
o
k
S
t
a
c
k
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




N
o
t
e
s
 
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
 
u
s
e
r
s
 
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
 
c
l
i
e
n
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
n
o
t
e
s
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
 
U
s
e
r
 
l
o
g
s
 
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
 
a
c
c
e
s
s
i
n
g
 
N
o
t
e
s


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
 
v
i
a
 
O
I
D
C


-
 
T
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
e
n
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
 
t
h
e
 
t
o
k
e
n
 
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


-
 
A
N
D
 
s
c
o
p
e
s
 
i
n
c
l
u
d
e
 
`
o
p
e
n
i
d
`
 
a
n
d
 
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
o
t
e
s
-
s
c
o
p
e
`


-
 
A
N
D
 
e
s
s
e
n
t
i
a
l
 
c
l
a
i
m
s
 
i
n
c
l
u
d
e
 
`
e
m
a
i
l
`


-
 
A
N
D
 
u
s
e
r
'
s
 
f
u
l
l
 
n
a
m
e
 
c
o
m
e
s
 
f
r
o
m
 
`
g
i
v
e
n
_
n
a
m
e
,
f
a
m
i
l
y
_
n
a
m
e
`


-
 
A
N
D
 
u
s
e
r
'
s
 
s
h
o
r
t
 
n
a
m
e
 
c
o
m
e
s
 
f
r
o
m
 
`
g
i
v
e
n
_
n
a
m
e
`


-
 
A
N
D
 
l
o
g
i
n
 
f
a
i
l
u
r
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


-
 
A
N
D
 
l
o
g
o
u
t
 
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
o
t
e
 
C
R
U
D
 
w
i
t
h
 
A
I
 
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




N
o
t
e
s
 
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
,
 
e
d
i
t
i
n
g
,
 
a
n
d
 
d
e
l
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
 
w
i
t
h
 
o
p
t
i
o
n
a
l


A
I
 
a
s
s
i
s
t
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
 
A
I
-
a
s
s
i
s
t
e
d
 
n
o
t
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
 
`
a
i
.
a
p
i
K
e
y
`
 
a
n
d
 
`
a
i
.
e
n
d
p
o
i
n
t
`
 
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
 
W
H
E
N
 
a
 
u
s
e
r
 
u
s
e
s
 
A
I
 
f
e
a
t
u
r
e
s
 
i
n
 
t
h
e
 
e
d
i
t
o
r


-
 
T
H
E
N
 
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
 
g
o
e
s
 
t
o
 
t
h
e
 
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
 
A
I
 
m
o
d
e
l
/
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
 
A
I
 
r
e
s
u
l
t
s
 
a
r
e
 
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
l
i
n
e
 
i
n
 
t
h
e
 
n
o
t
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
o
n




N
o
t
e
s
 
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
 
r
e
a
l
-
t
i
m
e
 
m
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
o
n
 
v
i
a
 
t
h
e
 
Y
-
P
r
o
v
i
d
e
r


s
e
r
v
i
c
e
 
(
Y
j
s
 
p
r
o
t
o
c
o
l
 
o
v
e
r
 
W
e
b
S
o
c
k
e
t
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
 
C
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
 
t
w
o
 
u
s
e
r
s
 
e
d
i
t
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
 
n
o
t
e


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
 
Y
-
P
r
o
v
i
d
e
r
 
W
e
b
S
o
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
 
u
s
e
s
 
r
o
o
m
-
b
a
s
e
d
 
a
f
f
i
n
i
t
y
 
(
`
u
p
s
t
r
e
a
m
-
h
a
s
h
-
b
y
:
 
"
$
a
r
g
_
r
o
o
m
"
`
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
 
E
m
a
i
l
 
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
s




N
o
t
e
s
 
S
H
A
L
L
 
s
e
n
d
 
e
m
a
i
l
 
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
s
 
f
o
r
 
s
h
a
r
e
d
 
n
o
t
e
s
 
a
n
d
 
m
e
n
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
 
S
h
a
r
e
 
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
 
s
h
a
r
i
n
g
 
a
 
n
o
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
 
s
h
a
r
e
 
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
 
T
H
E
N
 
N
o
t
e
s
 
s
e
n
d
s
 
a
n
 
e
m
a
i
l
 
v
i
a
 
P
o
s
t
f
i
x
 
(
p
o
r
t
 
2
5
)


-
 
A
N
D
 
t
h
e
 
s
e
n
d
e
r
 
i
s
 
`
n
o
-
r
e
p
l
y
@
<
m
a
i
l
D
o
m
a
i
n
>
`


-
 
A
N
D
 
t
h
e
 
b
r
a
n
d
 
n
a
m
e
 
i
s
 
"
o
p
e
n
D
e
s
k
"




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
3
 
n
o
t
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
s




N
o
t
e
s
 
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
 
n
o
t
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
s
 
o
n
 
S
3
-
c
o
m
p
a
t
i
b
l
e
 
o
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
 
(
M
i
n
I
O
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
 
U
p
l
o
a
d
 
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
 
u
s
e
r
 
u
p
l
o
a
d
i
n
g
 
a
 
f
i
l
e
 
t
o
 
a
 
n
o
t
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
 
N
o
t
e
s
 
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
 
v
i
a
 
t
h
e
 
n
o
t
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
 
I
n
i
t
i
a
l
 
s
u
p
e
r
u
s
e
r




N
o
t
e
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
 
a
 
D
j
a
n
g
o
 
s
u
p
e
r
u
s
e
r
 
o
n
 
f
i
r
s
t
 
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
p
e
r
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
d


-
 
G
I
V
E
N
 
`
d
j
a
n
g
o
.
c
r
e
a
t
e
S
u
p
e
r
u
s
e
r
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
 
a
 
s
u
p
e
r
u
s
e
r
 
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
u
p
e
r
u
s
e
r
E
m
a
i
l
`
 
a
n
d
 
`
s
u
p
e
r
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


-
 
A
N
D
 
t
h
e
 
s
u
p
e
r
u
s
e
r
 
h
a
s
 
f
u
l
l
 
a
d
m
i
n
 
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
 
C
u
s
t
o
m
i
z
a
t
i
o
n
 
v
i
a
 
C
o
n
f
i
g
M
a
p




N
o
t
e
s
 
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
u
s
t
o
m
 
t
h
e
m
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
 
v
i
a
 
a
 
C
o
n
f
i
g
M
a
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
 
O
p
e
n
D
e
s
k
 
t
h
e
m
e


-
 
G
I
V
E
N
 
`
i
m
p
r
e
s
s
-
c
u
s
t
o
m
i
z
a
t
i
o
n
`
 
C
o
n
f
i
g
M
a
p


-
 
W
H
E
N
 
t
h
e
 
f
r
o
n
t
e
n
d
 
l
o
a
d
s


-
 
T
H
E
N
 
`
t
h
e
m
e
.
j
s
o
n
`
 
i
s
 
m
o
u
n
t
e
d
 
i
n
t
o
 
t
h
e
 
f
r
o
n
t
e
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


-
 
A
N
D
 
`
r
u
n
t
i
m
e
-
e
n
v
.
j
s
`
 
i
s
 
m
o
u
n
t
e
d
 
w
i
t
h
 
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
 
v
a
r
i
a
b
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
 
`
o
p
e
n
D
e
s
k
`
 
f
r
o
n
t
e
n
d
 
t
h
e
m
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


-
 
[
S
3
 
O
b
j
e
c
t
 
S
t
o
r
a
g
e
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
s
3
-
o
b
j
e
c
t
-
s
t
o
r
a
g
e
)
 
—
 
f
i
l
e
/
m
e
d
i
a
 
s
t
o
r
a
g
e


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
 
D
j
a
n
g
o
 
R
E
S
T
 
A
P
I
 
|
 
1
0
0
1
 
(
n
o
t
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
Y
-
P
r
o
v
i
d
e
r
 
W
e
b
S
o
c
k
e
t
*
*
:
 
N
o
t
e
s
 
Y
-
P
r
o
v
i
d
e
r
 
r
e
q
u
i
r
e
s
 
W
e
b
S
o
c
k
e
t
 
w
i
t
h
 
8
6
4
0
0
s
 
t
i
m
e
o
u
t
 
(
2
4
h
)
.
 
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
 
m
u
s
t
 
h
a
v
e
 
e
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t
 
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
 
Y
-
P
r
o
v
i
d
e
r
 
e
n
d
p
o
i
n
t
.


*
*
A
I
 
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
 
N
o
t
e
s
 
A
I
 
f
e
a
t
u
r
e
s
 
(
s
u
m
m
a
r
i
z
a
t
i
o
n
,
 
e
t
c
.
)
 
r
e
q
u
i
r
e
 
a
n
 
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
 
e
n
d
p
o
i
n
t
.
 
I
f
 
t
h
e
 
e
n
d
p
o
i
n
t
 
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
,
 
A
I
 
f
e
a
t
u
r
e
s
 
s
i
l
e
n
t
l
y
 
f
a
i
l
 
(
n
o
 
e
r
r
o
r
 
s
h
o
w
n
 
t
o
 
u
s
e
r
)
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
,
 
c
l
i
e
n
t
:
 
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
o
t
e
s
`
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
`
n
o
t
e
s
`
 
D
B
)
,
 
M
i
n
I
O
/
S
3
 
(
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
)
,
 
R
e
d
i
s
 
(
D
j
a
n
g
o
 
c
a
c
h
e
,
 
d
a
t
a
b
a
s
e
 
7
)
,
 
P
o
s
t
f
i
x
 
(
e
m
a
i
l
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
,
 
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
 
l
o
g
i
n
/
l
o
g
o
u
t
 
r
e
d
i
r
e
c
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
 
O
I
D
C
 
r
e
d
i
r
e
c
t
)
,
 
P
o
s
t
f
i
x
 
(
e
m
a
i
l
 
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
s
)
,
 
M
i
n
I
O
 
(
n
o
t
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
s
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
 
O
I
D
C
 
(
c
l
i
e
n
t
:
 
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
o
t
e
s
`
)
 
|


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
`
n
o
t
e
s
`
 
D
B
,
 
`
n
o
t
e
s
`
 
u
s
e
r
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
 
S
3
/
M
i
n
I
O
 
(
n
o
t
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
s
)
 
|


|
 
C
a
c
h
e
 
|
 
R
e
d
i
s
 
(
D
j
a
n
g
o
 
c
a
c
h
e
,
 
d
a
t
a
b
a
s
e
 
7
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
 
C
o
n
f
i
g
 
|
 
`
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
n
o
t
e
s
.
*
`
,
 
`
a
i
.
*
`
,
 
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
n
o
t
e
s
/
v
a
l
u
e
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
 
`
n
o
t
e
s
`
 
(
O
C
I
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


|
 
B
a
c
k
e
n
d
 
i
m
a
g
e
 
|
 
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
 
1
0
0
1
`
,
 
`
r
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
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
`
 
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
 
n
o
t
e
-
t
a
k
i
n
g
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
4
0
0
m
s
 
(
n
o
t
e
 
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
r
e
a
l
-
t
i
m
e
 
s
y
n
c
)
 
|
 
Y
j
s
 
W
e
b
S
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
A
I
 
S
e
r
v
i
c
e
 
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
5
%
 
(
w
h
e
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
d
)
 
|
 
A
I
 
e
n
d
p
o
i
n
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
 
N
o
t
e
s
 
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
 
A
I
 
s
e
r
v
i
c
e
 
f
a
i
l
u
r
e
s
 
>
1
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
 
→
 
P
3
 
a
l
e
r
t
 
(
i
f
 
A
I
 
e
n
a
b
l
e
d
)




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
 
1
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


-
 
5
,
0
0
0
 
n
o
t
e
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
 
d
a
y


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
 
r
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
o
n
 
s
e
s
s
i
o
n
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
:
 
2
 
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
 
2
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


-
 
S
3
 
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
:
 
1
0
0
 
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
 
T
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


-
 
*
*
S
3
 
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
,
 
3
0
-
d
a
y
 
r
e
t
e
n
t
i
o
n


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
 
1
5
 
m
i
n


2
.
 
S
3
 
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
 
1
0
 
m
i
n


3
.
 
B
a
c
k
e
n
d
 
(
D
j
a
n
g
o
)
 
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
 
F
r
o
n
t
e
n
d
 
(
R
e
a
c
t
)
 
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


5
.
 
Y
-
P
r
o
v
i
d
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
o
n
 
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


6
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


7
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
 
n
o
t
e
,
 
e
d
i
t
,
 
r
e
a
l
-
t
i
m
e
 
s
y
n
c
)
 
-
 
1
0
 
m
i
n


8
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
 
N
o
t
e
s
 
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
 
s
t
r
u
c
t
u
r
e


-
 
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
o
n
 
s
t
a
t
e
 
(
Y
j
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
 
A
I
 
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


-
 
S
3
 
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
 
n
o
t
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
S
3
 
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
 
c
h
e
c
k
s
u
m
s


-
 
*
*
Y
-
P
r
o
v
i
d
e
r
 
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
 
s
e
r
v
i
c
e
,
 
v
e
r
i
f
y
 
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
 
a
l
l
 
3
 
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
 
+
 
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
,
 
r
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
 
F
r
o
n
t
e
n
d
 
i
m
a
g
e
 
|
 
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
 
1
0
0
0
`
,
 
`
r
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
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
`
 
|


|
 
Y
-
P
r
o
v
i
d
e
r
 
i
m
a
g
e
 
|
 
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
 
1
0
0
1
`
,
 
`
r
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
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
`
 
|


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
n
o
t
e
s
B
a
c
k
e
n
d
`
 
(
b
a
c
k
e
n
d
)
,
 
1
 
(
f
r
o
n
t
e
n
d
)
,
 
1
 
(
y
-
p
r
o
v
i
d
e
r
)
 
|


|
 
D
j
a
n
g
o
 
s
e
c
r
e
t
 
|
 
`
s
e
c
r
e
t
s
.
n
o
t
e
s
.
d
j
a
n
g
o
S
e
c
r
e
t
K
e
y
`
 
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
t
i
o
n
 
s
e
c
r
e
t
 
|
 
`
s
e
c
r
e
t
s
.
n
o
t
e
s
.
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
S
e
c
r
e
t
`
 
|


|
 
O
p
e
n
D
e
s
k
 
f
e
a
t
u
r
e
s
 
|
 
`
F
R
O
N
T
E
N
D
_
H
O
M
E
P
A
G
E
_
F
E
A
T
U
R
E
_
E
N
A
B
L
E
D
:
 
F
a
l
s
e
`
,
 
`
F
R
O
N
T
E
N
D
_
F
O
O
T
E
R
_
F
E
A
T
U
R
E
_
E
N
A
B
L
E
D
:
 
F
a
l
s
e
`
 
|

