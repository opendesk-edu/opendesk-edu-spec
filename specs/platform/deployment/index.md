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
 
O
r
c
h
e
s
t
r
a
t
i
o
n




#
#
 
P
u
r
p
o
s
e




H
e
l
m
f
i
l
e
-
b
a
s
e
d
 
m
u
l
t
i
-
r
e
l
e
a
s
e
 
o
r
c
h
e
s
t
r
a
t
i
o
n
 
o
f
 
3
5
+
 
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
 
a
c
r
o
s
s


m
u
l
t
i
p
l
e
 
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
 
I
n
d
i
v
i
d
u
a
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
 
i
n
t
e
r
n
a
l
s
 
(
s
e
e
 
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
 
G
i
t
O
p
s
 
w
o
r
k
f
l
o
w
 
(
A
r
g
o
C
D
 
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
 
i
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
,
 
n
o
t
 
i
n
 
s
p
e
c
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
n
e
-
c
o
m
m
a
n
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
 
b
e
 
d
e
p
l
o
y
a
b
l
e
 
w
i
t
h
 
a
 
s
i
n
g
l
e
 
c
o
m
m
a
n
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
 
F
r
e
s
h
 
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
 
c
l
u
s
t
e
r
 
w
i
t
h
 
H
e
l
m
 
3
.
1
7
.
3
+
,
 
H
e
l
m
f
i
l
e
 
1
.
0
.
0
+
,
 
H
e
l
m
D
i
f
f
 
3
.
1
1
.
0
+


-
 
W
H
E
N
 
a
n
 
o
p
e
r
a
t
o
r
 
r
u
n
s
 
`
h
e
l
m
f
i
l
e
 
-
e
 
<
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
>
 
a
p
p
l
y
`


-
 
T
H
E
N
 
a
l
l
 
r
e
l
e
a
s
e
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
y
 
o
r
d
e
r


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
 
b
e
t
w
e
e
n
 
r
e
l
e
a
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
 
E
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
 
d
i
r
e
c
t
o
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
h
e
l
m
f
i
l
e
/
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
s
/
`
 
(
d
e
v
,
 
t
e
s
t
,
 
p
r
o
d
)


-
 
W
H
E
N
 
`
h
e
l
m
f
i
l
e
 
-
e
 
p
r
o
d
 
a
p
p
l
y
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


-
 
T
H
E
N
 
v
a
l
u
e
s
 
f
r
o
m
 
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
s
/
p
r
o
d
/
*
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
 
a
r
e
 
a
p
p
l
i
e
d


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
 
u
s
e
s
 
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
s
p
e
c
i
f
i
c
 
d
o
m
a
i
n
,
 
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
e
s
,
 
a
n
d
 
f
e
a
t
u
r
e
 
f
l
a
g
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
l
e
a
s
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
 
o
r
d
e
r
i
n
g




H
e
l
m
f
i
l
e
 
S
H
A
L
L
 
p
r
o
c
e
s
s
 
r
e
l
e
a
s
e
s
 
i
n
 
a
 
s
t
r
i
c
t
 
o
r
d
e
r
 
e
n
s
u
r
i
n
g
 
n
o
 
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
 
i
s


d
e
p
l
o
y
e
d
 
b
e
f
o
r
e
 
i
t
s
 
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
r
e
-
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
 
r
u
n
 
f
i
r
s
t


-
 
G
I
V
E
N
 
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
p
r
e
`
 
i
n
 
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
 
l
i
s
t


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
 
o
r
d
e
r


-
 
T
H
E
N
 
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
p
r
e
 
e
x
e
c
u
t
e
s
 
B
E
F
O
R
E
 
a
n
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
 
r
e
l
e
a
s
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
 
I
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
 
b
e
f
o
r
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
s


-
 
G
I
V
E
N
 
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
s
e
r
v
i
c
e
s
`
 
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
,
 
e
t
c
.
)
 
i
n
 
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
 
l
i
s
t


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
 
o
r
d
e
r


-
 
T
H
E
N
 
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
l
o
y
 
B
E
F
O
R
E
 
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
s
 
t
h
a
t
 
d
e
p
e
n
d
 
o
n
 
t
h
e
m




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
s
t
-
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
 
r
u
n
 
l
a
s
t


-
 
G
I
V
E
N
 
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
p
o
s
t
`
 
i
n
 
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
 
l
i
s
t


-
 
W
H
E
N
 
a
l
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
 
r
e
l
e
a
s
e
s
 
c
o
m
p
l
e
t
e


-
 
T
H
E
N
 
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
p
o
s
t
 
e
x
e
c
u
t
e
s
 
A
F
T
E
R
 
a
l
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
 
T
e
m
p
l
a
t
e
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




V
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
 
G
o
 
t
e
m
p
l
a
t
i
n
g
 
v
i
a
 
`
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
 
e
x
t
e
n
s
i
o
n
,


e
n
a
b
l
i
n
g
 
d
y
n
a
m
i
c
 
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
 
f
r
o
m
 
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
 
E
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
 
i
n
t
e
r
p
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
 
a
 
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
 
c
o
n
t
a
i
n
i
n
g
 
`
{
{
 
e
n
v
 
"
O
P
E
N
D
E
S
K
_
D
O
M
A
I
N
"
 
}
}
`


-
 
W
H
E
N
 
t
h
e
 
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
 
t
h
e
 
t
e
m
p
l
a
t
e
 
i
s
 
r
e
n
d
e
r
e
d
 
w
i
t
h
 
t
h
e
 
a
c
t
u
a
l
 
v
a
l
u
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
 
H
e
l
m
 
v
e
r
s
i
o
n
 
c
o
m
p
a
t
i
b
i
l
i
t
y




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
 
u
s
e
 
H
e
l
m
 
>
=
 
3
.
1
7
.
3
.
 
H
e
l
m
 
3
.
1
8
.
0
 
a
n
d
 
4
.
x
 
a
r
e
 
N
O
T
 
s
u
p
p
o
r
t
e
d


d
u
e
 
t
o
 
k
n
o
w
n
 
b
u
g
s
 
a
n
d
 
b
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
.




#
#
 
K
n
o
w
n
 
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
t
r
a
i
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
 
M
a
r
i
a
D
B
 
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




H
e
l
m
-
d
e
p
l
o
y
e
d
 
M
a
r
i
a
D
B
 
p
a
s
s
w
o
r
d
s
 
m
a
y
 
d
i
f
f
e
r
 
f
r
o
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
 
s
e
t
 
d
u
r
i
n
g
 
i
n
i
t
i
a
l


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
 
O
n
 
u
p
g
r
a
d
e
s
,
 
t
h
e
 
H
e
l
m
-
m
a
n
a
g
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
 
S
H
A
L
L
 
b
e
 
c
h
e
c
k
e
d
 
a
n
d
 
s
y
n
c
e
d


v
i
a
 
`
A
L
T
E
R
 
U
S
E
R
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
 
P
a
s
s
w
o
r
d
 
m
i
s
m
a
t
c
h
 
a
f
t
e
r
 
u
p
g
r
a
d
e


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
 
i
n
s
t
a
n
c
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
 
H
e
l
m
 
w
i
t
h
 
a
 
g
e
n
e
r
a
t
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
 
W
H
E
N
 
t
h
e
 
H
e
l
m
 
r
e
l
e
a
s
e
 
i
s
 
u
p
g
r
a
d
e
d
 
w
i
t
h
 
a
 
n
e
w
 
g
e
n
e
r
a
t
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
 
T
H
E
N
 
t
h
e
 
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
t
a
i
n
s
 
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
 
t
h
e
 
o
p
e
r
a
t
o
r
 
M
U
S
T
 
r
u
n
 
`
A
L
T
E
R
 
U
S
E
R
`
 
t
o
 
s
y
n
c
 
t
h
e
 
H
e
l
m
-
m
a
n
a
g
e
d
 
v
a
l
u
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
 
T
r
a
n
s
i
e
n
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
 
r
e
s
i
l
i
e
n
c
e




N
e
w
l
y
 
c
r
e
a
t
e
d
 
p
o
d
s
 
M
A
Y
 
e
x
p
e
r
i
e
n
c
e
 
t
r
a
n
s
i
e
n
t
 
`
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
 
r
e
f
u
s
e
d
`
 
e
r
r
o
r
s
 
o
n


f
i
r
s
t
 
d
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
 
a
t
t
e
m
p
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
 
R
e
t
r
y
 
o
n
 
f
i
r
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
e
w
l
y
 
c
r
e
a
t
e
d
 
p
o
d
 
(
e
.
g
.
,
 
I
L
I
A
S
 
c
r
o
n
j
o
b
)
 
c
o
n
n
e
c
t
i
n
g
 
t
o
 
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
 
t
h
e
 
f
i
r
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
o
n
 
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
 
w
i
t
h
 
`
S
Q
L
S
T
A
T
E
[
H
Y
0
0
0
]
 
[
2
0
0
2
]
 
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
 
r
e
f
u
s
e
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
 
S
H
A
L
L
 
r
e
t
r
y
 
w
i
t
h
 
a
 
b
a
c
k
o
f
f


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
n
e
c
t
i
o
n
 
S
H
A
L
L
 
s
u
c
c
e
e
d
 
w
i
t
h
i
n
 
5
 
a
t
t
e
m
p
t
s
 
(
1
0
s
 
s
l
e
e
p
 
b
e
t
w
e
e
n
 
r
e
t
r
i
e
s
)




#
#
 
V
e
r
s
i
o
n
 
C
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




|
 
T
o
o
l
 
|
 
M
i
n
i
m
u
m
 
V
e
r
s
i
o
n
 
|
 
E
x
c
l
u
d
e
d
 
|


|
:
-
-
-
-
-
|
:
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
:
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
 
H
e
l
m
 
|
 
3
.
1
7
.
3
 
|
 
3
.
1
8
.
0
,
 
4
.
x
 
|


|
 
H
e
l
m
f
i
l
e
 
|
 
1
.
0
.
0
 
|
 
—
 
|


|
 
H
e
l
m
D
i
f
f
 
|
 
3
.
1
1
.
0
 
|
 
—
 
|


|
 
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
 
|
 
1
.
2
4
 
|
 
O
p
e
n
S
h
i
f
t
 
(
u
n
t
e
s
t
e
d
)
 
|




#
#
 
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
 
W
a
v
e
s




R
e
l
e
a
s
e
s
 
a
r
e
 
p
r
o
c
e
s
s
e
d
 
i
n
 
6
 
w
a
v
e
s
 
t
o
 
e
n
s
u
r
e
 
c
o
r
r
e
c
t
 
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
 
o
r
d
e
r
i
n
g
.


E
a
c
h
 
w
a
v
e
'
s
 
`
d
e
p
l
o
y
S
t
a
g
e
`
 
l
a
b
e
l
 
c
o
n
t
r
o
l
s
 
o
r
d
e
r
i
n
g
.




|
 
W
a
v
e
 
|
 
S
t
a
g
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
s
 
|
 
L
a
b
e
l
 
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
|


|
 
1
 
|
 
0
0
0
-
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
 
|
 
P
r
e
-
m
i
g
r
a
t
i
o
n
 
j
o
b
s
 
|
 
`
0
0
0
-
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
`
 
|


|
 
2
 
|
 
0
1
0
-
i
n
f
r
a
 
|
 
K
e
y
c
l
o
a
k
,
 
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
,
 
R
e
d
i
s
,
 
M
e
m
c
a
c
h
e
d
,
 
M
i
n
I
O
,
 
D
o
v
e
c
o
t
,
 
P
o
s
t
f
i
x
 
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
 
3
 
|
 
0
2
0
-
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
 
|
 
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
,
 
I
n
t
e
r
c
o
m
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
X
 
A
p
p
S
u
i
t
e
,
 
S
O
G
o
,
 
E
l
e
m
e
n
t
 
|
 
`
0
2
0
-
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
`
 
|


|
 
4
 
|
 
0
4
0
-
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
,
 
J
i
t
s
i
,
 
B
i
g
B
l
u
e
B
u
t
t
o
n
,
 
E
t
h
e
r
p
a
d
,
 
C
r
y
p
t
P
a
d
 
|
 
`
0
4
0
-
c
o
l
l
a
b
`
 
|


|
 
5
 
|
 
0
6
0
-
e
d
u
c
a
t
i
o
n
 
|
 
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
 
X
W
i
k
i
,
 
Z
a
m
m
a
d
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
 
|
 
`
0
6
0
-
e
d
u
`
 
|


|
 
6
 
|
 
0
5
0
-
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
 
|
 
P
l
a
n
k
a
,
 
N
o
t
e
s
,
 
B
o
o
k
S
t
a
c
k
,
 
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
,
 
T
Y
P
O
3
,
 
S
S
P
,
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
 
|
 
`
0
5
0
-
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
`
 
|




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
 
W
a
v
e
 
o
r
d
e
r
i
n
g
 
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




H
e
l
m
f
i
l
e
 
S
H
A
L
L
 
p
r
o
c
e
s
s
 
r
e
l
e
a
s
e
s
 
i
n
 
a
s
c
e
n
d
i
n
g
 
`
d
e
p
l
o
y
S
t
a
g
e
`
 
o
r
d
e
r
.
 
W
i
t
h
i
n
 
t
h
e


s
a
m
e
 
s
t
a
g
e
,
 
r
e
l
e
a
s
e
s
 
M
A
Y
 
b
e
 
p
r
o
c
e
s
s
e
d
 
i
n
 
p
a
r
a
l
l
e
l
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
e
d
 
b
e
f
o
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


-
 
G
I
V
E
N
 
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
s
e
r
v
i
c
e
s
`
 
(
d
a
t
a
b
a
s
e
s
)
 
h
a
s
 
`
d
e
p
l
o
y
S
t
a
g
e
:
 
0
1
0
`


-
 
A
N
D
 
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
`
 
h
a
s
 
`
d
e
p
l
o
y
S
t
a
g
e
:
 
0
2
0
`


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
 
o
r
d
e
r


-
 
T
H
E
N
 
d
a
t
a
b
a
s
e
s
 
d
e
p
l
o
y
 
B
E
F
O
R
E
 
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
s


-
 
A
N
D
 
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
 
p
o
d
s
 
d
o
 
n
o
t
 
c
r
a
s
h
-
l
o
o
p
 
o
n
 
m
i
s
s
i
n
g
 
d
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
s




#
#
 
K
n
o
w
n
 
S
e
r
v
i
c
e
 
Q
u
i
r
k
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
 
l
i
c
e
n
s
e
-
c
a
c
h
e
 
C
r
o
n
J
o
b
 
f
a
i
l
u
r
e
 
h
a
n
d
l
i
n
g




T
h
e
 
`
u
m
s
-
u
d
m
-
r
e
s
t
-
a
p
i
-
l
i
c
e
n
s
e
-
c
a
c
h
e
`
 
C
r
o
n
J
o
b
 
i
n
 
b
o
t
h
 
`
d
e
f
a
u
l
t
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
`


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
 
S
H
A
L
L
 
f
a
i
l
 
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
.
 
T
h
e
 
b
i
n
a
r
y


`
/
u
s
r
/
s
h
a
r
e
/
u
n
i
v
e
n
t
i
o
n
-
d
i
r
e
c
t
o
r
y
-
m
a
n
a
g
e
r
-
t
o
o
l
s
/
u
n
i
v
e
n
t
i
o
n
-
u
p
d
a
t
e
-
l
i
c
e
n
s
e
-
c
a
c
h
e
`


d
o
e
s
 
n
o
t
 
e
x
i
s
t
 
i
n
 
i
m
a
g
e
 
`
u
d
m
-
r
e
s
t
-
a
p
i
:
0
.
4
2
.
6
`
.
 
T
h
i
s
 
C
r
o
n
J
o
b
 
S
H
A
L
L
 
b
e
 
s
u
s
p
e
n
d
e
d


u
n
t
i
l
 
t
h
e
 
c
h
a
r
t
 
i
s
 
u
p
d
a
t
e
d
 
t
o
 
a
 
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
 
v
e
r
s
i
o
n
.




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
 
k
8
u
p
 
R
W
O
 
P
V
C
 
e
x
c
l
u
s
i
o
n




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
 
(
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
 
o
n
 
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
)
.
 
O
n
l
y
 
R
W
X
 
P
V
C
s
 
a
r
e
 
b
a
c
k
e
d
 
u
p
 
b
y
 
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
 
s
c
h
e
d
u
l
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
 
B
a
c
k
u
p
 
j
o
b
 
s
t
u
c
k
 
o
n
 
R
W
O
 
P
V
C


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
 
i
n
c
l
u
d
i
n
g
 
R
W
O


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
 
p
o
d
 
t
r
i
e
s
 
t
o
 
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
d
 
h
a
n
g
s
 
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
 
i
n
d
e
f
i
n
i
t
e
l
y


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
c
k
 
J
o
b
 
S
H
A
L
L
 
b
e
 
d
e
l
e
t
e
d
 
f
o
r
 
t
h
e
 
n
e
x
t
 
s
c
h
e
d
u
l
e
d
 
r
u
n


-
 
A
N
D
 
a
l
l
 
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
 
h
a
v
e
 
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




#
#
 
S
e
r
v
i
c
e
 
T
i
e
r
s




|
 
T
i
e
r
 
|
 
S
e
r
v
i
c
e
s
 
|
 
S
L
A
 
T
a
r
g
e
t
 
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
,
 
M
i
n
I
O
 
|
 
9
9
.
9
%
 
|


|
 
H
i
g
h
 
|
 
N
u
b
u
s
,
 
I
n
t
e
r
c
o
m
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
X
,
 
S
O
G
o
,
 
E
l
e
m
e
n
t
 
|
 
9
9
.
9
%
 
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
 
X
W
i
k
i
,
 
J
i
t
s
i
/
B
B
B
,
 
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
 
9
9
.
5
%
 
|


|
 
L
o
w
 
|
 
P
l
a
n
k
a
,
 
N
o
t
e
s
,
 
E
t
h
e
r
p
a
d
,
 
C
r
y
p
t
P
a
d
,
 
B
o
o
k
S
t
a
c
k
,
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
 
|
 
9
9
.
0
%
 
|


|
 
S
u
p
p
o
r
t
 
|
 
S
S
P
,
 
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
,
 
T
Y
P
O
3
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
,
 
Z
a
m
m
a
d
 
|
 
9
9
.
0
%
 
|

