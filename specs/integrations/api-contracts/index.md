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




#
#
 
P
u
r
p
o
s
e




F
o
r
m
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
t
u
b
s
 
f
o
r
 
k
e
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
 
p
o
i
n
t
s
 
b
e
t
w
e
e
n
 
s
e
r
v
i
c
e
s
.


T
h
e
s
e
 
d
e
f
i
n
e
 
t
h
e
 
e
x
p
e
c
t
e
d
 
r
e
q
u
e
s
t
/
r
e
s
p
o
n
s
e
 
s
h
a
p
e
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
 
f
l
o
w
s
,


a
n
d
 
e
r
r
o
r
 
h
a
n
d
l
i
n
g
 
f
o
r
 
i
n
t
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
 
c
o
m
m
u
n
i
c
a
t
i
o
n
.




C
o
n
t
r
a
c
t
s
 
a
r
e
 
o
r
g
a
n
i
z
e
d
 
b
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
 
d
o
m
a
i
n
.
 
E
a
c
h
 
c
o
n
t
r
a
c
t
 
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
 
H
T
T
P
 
m
e
t
h
o
d
,
 
p
a
t
h
,
 
r
e
q
u
e
s
t
 
b
o
d
y
,
 
r
e
s
p
o
n
s
e
 
b
o
d
y
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


m
e
c
h
a
n
i
s
m
,
 
a
n
d
 
e
r
r
o
r
 
c
o
d
e
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
t
e
r
n
a
l
 
l
i
b
r
a
r
y
 
A
P
I
 
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
 
(
s
e
e
 
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
e
r
v
i
c
e
 
d
o
c
s
)


-
 
F
u
l
l
 
O
p
e
n
A
P
I
/
S
w
a
g
g
e
r
 
s
p
e
c
s
 
(
t
h
e
s
e
 
a
r
e
 
h
i
g
h
-
l
e
v
e
l
 
c
o
n
t
r
a
c
t
s
 
f
o
r
 
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
 
t
e
s
t
i
n
g
)


-
 
C
l
i
e
n
t
 
S
D
K
 
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
 
(
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
r
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
 
o
n
l
y
)




-
-
-




#
#
 
C
o
n
t
r
a
c
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
 
O
I
D
C
 
T
o
k
e
n
 
E
n
d
p
o
i
n
t




*
*
S
e
r
v
i
c
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
 
→
 
A
l
l
 
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
s


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
P
O
S
T
 
/
r
e
a
l
m
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
/
p
r
o
t
o
c
o
l
/
o
p
e
n
i
d
-
c
o
n
n
e
c
t
/
t
o
k
e
n
`


*
*
A
u
t
h
*
*
:
 
C
l
i
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
s
 
o
r
 
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
 
c
o
d
e




#
#
#
 
R
e
q
u
e
s
t
 
(
A
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
 
C
o
d
e
)




`
`
`
j
s
o
n


{


 
 
"
g
r
a
n
t
_
t
y
p
e
"
:
 
"
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
_
c
o
d
e
"
,


 
 
"
c
o
d
e
"
:
 
"
<
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
_
c
o
d
e
>
"
,


 
 
"
r
e
d
i
r
e
c
t
_
u
r
i
"
:
 
"
h
t
t
p
s
:
/
/
<
s
e
r
v
i
c
e
>
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
<
d
o
m
a
i
n
>
/
c
a
l
l
b
a
c
k
"
,


 
 
"
c
l
i
e
n
t
_
i
d
"
:
 
"
<
c
l
i
e
n
t
_
i
d
>
"
,


 
 
"
c
l
i
e
n
t
_
s
e
c
r
e
t
"
:
 
"
<
c
l
i
e
n
t
_
s
e
c
r
e
t
>
"


}


`
`
`




#
#
#
 
R
e
s
p
o
n
s
e
 
(
S
u
c
c
e
s
s
)




`
`
`
j
s
o
n


{


 
 
"
a
c
c
e
s
s
_
t
o
k
e
n
"
:
 
"
<
o
p
a
q
u
e
-
a
c
c
e
s
s
-
t
o
k
e
n
>
"
,


 
 
"
t
o
k
e
n
_
t
y
p
e
"
:
 
"
B
e
a
r
e
r
"
,


 
 
"
e
x
p
i
r
e
s
_
i
n
"
:
 
3
0
0
,


 
 
"
r
e
f
r
e
s
h
_
t
o
k
e
n
"
:
 
"
<
o
p
a
q
u
e
-
r
e
f
r
e
s
h
-
t
o
k
e
n
>
"
,


 
 
"
r
e
f
r
e
s
h
_
e
x
p
i
r
e
s
_
i
n
"
:
 
1
8
0
0
,


 
 
"
i
d
_
t
o
k
e
n
"
:
 
"
<
o
p
a
q
u
e
-
i
d
-
t
o
k
e
n
>
"


}


`
`
`




#
#
#
 
S
t
a
n
d
a
r
d
 
C
l
a
i
m
s
 
(
i
d
_
t
o
k
e
n
)




`
`
`
j
s
o
n


{


 
 
"
s
u
b
"
:
 
"
u
u
i
d
-
o
f
-
u
s
e
r
"
,


 
 
"
e
m
a
i
l
"
:
 
"
u
s
e
r
@
e
x
a
m
p
l
e
.
c
o
m
"
,


 
 
"
e
m
a
i
l
_
v
e
r
i
f
i
e
d
"
:
 
t
r
u
e
,


 
 
"
p
r
e
f
e
r
r
e
d
_
u
s
e
r
n
a
m
e
"
:
 
"
j
d
o
e
"
,


 
 
"
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
"
:
 
"
J
o
h
n
 
D
o
e
"
,


 
 
"
r
e
a
l
m
_
a
c
c
e
s
s
"
:
 
{
 
"
r
o
l
e
s
"
:
 
[
"
s
t
u
d
e
n
t
"
,
 
"
o
p
e
n
d
e
s
k
-
u
s
e
r
"
]
 
}
,


 
 
"
r
e
s
o
u
r
c
e
_
a
c
c
e
s
s
"
:
 
{
 
"
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
"
:
 
{
 
"
r
o
l
e
s
"
:
 
[
"
u
s
e
r
"
]
 
}
 
}


}


`
`
`




#
#
#
 
E
r
r
o
r
 
C
o
d
e
s




|
 
C
o
d
e
 
|
 
C
o
n
d
i
t
i
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


|
 
4
0
0
 
|
 
`
i
n
v
a
l
i
d
_
g
r
a
n
t
`
 
—
 
e
x
p
i
r
e
d
 
o
r
 
i
n
v
a
l
i
d
 
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
 
c
o
d
e
 
|


|
 
4
0
1
 
|
 
`
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
_
c
l
i
e
n
t
`
 
—
 
i
n
v
a
l
i
d
 
c
l
i
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
s
 
|


|
 
4
0
0
 
|
 
`
u
n
s
u
p
p
o
r
t
e
d
_
g
r
a
n
t
_
t
y
p
e
`
 
—
 
g
r
a
n
t
 
t
y
p
e
 
n
o
t
 
e
n
a
b
l
e
d
 
f
o
r
 
c
l
i
e
n
t
 
|




-
-
-




#
#
 
C
o
n
t
r
a
c
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
 
S
A
M
L
 
2
.
0
 
S
P
-
I
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




*
*
S
e
r
v
i
c
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
 
→
 
A
l
l
 
S
A
M
L
 
2
.
0
 
S
P
s
 
(
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
 
B
B
B
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
 
e
t
c
.
)


*
*
B
i
n
d
i
n
g
*
*
:
 
H
T
T
P
-
P
O
S
T
 
r
e
d
i
r
e
c
t




#
#
#
 
S
P
-
I
n
i
t
i
a
t
e
d
 
F
l
o
w




1
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
e
s
 
S
P
 
→
 
S
P
 
g
e
n
e
r
a
t
e
s
 
`
A
u
t
h
n
R
e
q
u
e
s
t
`
 
→
 
r
e
d
i
r
e
c
t
 
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


2
.
 
K
e
y
c
l
o
a
k
 
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
 
u
s
e
r
 
→
 
g
e
n
e
r
a
t
e
s
 
`
S
A
M
L
R
e
s
p
o
n
s
e
`
 
→
 
P
O
S
T
 
b
a
c
k
 
t
o
 
S
P
 
A
C
S
 
U
R
L




#
#
#
 
A
u
t
h
n
R
e
q
u
e
s
t
 
(
S
P
 
→
 
I
d
P
)




`
`
`
x
m
l


<
s
a
m
l
p
:
A
u
t
h
n
R
e
q
u
e
s
t


 
 
I
D
=
"
_
i
d
-
a
b
c
1
2
3
"


 
 
V
e
r
s
i
o
n
=
"
2
.
0
"


 
 
I
s
s
u
e
I
n
s
t
a
n
t
=
"
2
0
2
6
-
0
1
-
1
5
T
1
0
:
0
0
:
0
0
Z
"


 
 
P
r
o
t
o
c
o
l
B
i
n
d
i
n
g
=
"
u
r
n
:
o
a
s
i
s
:
n
a
m
e
s
:
t
c
:
S
A
M
L
:
2
.
0
:
b
i
n
d
i
n
g
s
:
H
T
T
P
-
P
O
S
T
"


 
 
A
s
s
e
r
t
i
o
n
C
o
n
s
u
m
e
r
S
e
r
v
i
c
e
U
R
L
=
"
h
t
t
p
s
:
/
/
<
s
e
r
v
i
c
e
>
/
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
.
s
s
o
/
S
A
M
L
2
/
P
O
S
T
"
>


 
 
<
s
a
m
l
:
I
s
s
u
e
r
>
h
t
t
p
s
:
/
/
<
s
e
r
v
i
c
e
>
/
s
h
i
b
b
o
l
e
t
h
<
/
s
a
m
l
:
I
s
s
u
e
r
>


 
 
<
s
a
m
l
p
:
N
a
m
e
I
D
P
o
l
i
c
y
 
F
o
r
m
a
t
=
"
u
r
n
:
o
a
s
i
s
:
n
a
m
e
s
:
t
c
:
S
A
M
L
:
1
.
1
:
n
a
m
e
i
d
-
f
o
r
m
a
t
:
u
n
s
p
e
c
i
f
i
e
d
"
/
>


<
/
s
a
m
l
p
:
A
u
t
h
n
R
e
q
u
e
s
t
>


`
`
`




#
#
#
 
S
A
M
L
R
e
s
p
o
n
s
e
 
(
I
d
P
 
→
 
S
P
)
 
—
 
K
e
y
 
A
t
t
r
i
b
u
t
e
s




|
 
A
t
t
r
i
b
u
t
e
 
|
 
S
o
u
r
c
e
 
|
 
U
s
e
d
 
B
y
 
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
 
`
m
a
i
l
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
 
u
s
e
r
 
e
m
a
i
l
 
|
 
A
l
l
 
S
P
s
 
|


|
 
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
 
d
i
s
p
l
a
y
 
n
a
m
e
 
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
 
|


|
 
`
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
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
 
r
e
a
l
m
 
r
o
l
e
 
|
 
I
L
I
A
S
 
|


|
 
`
u
i
d
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
 
u
s
e
r
n
a
m
e
 
|
 
M
o
o
d
l
e
,
 
B
B
B
 
|


|
 
 
 
`
p
r
e
f
e
r
r
e
d
_
u
s
e
r
n
a
m
e
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
 
u
s
e
r
n
a
m
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
 
O
I
D
C
 
|




#
#
#
 
S
A
M
L
 
P
O
S
T
 
M
e
t
a
d
a
t
a
 
E
n
d
p
o
i
n
t
 
(
D
F
N
-
A
A
I
 
F
e
d
e
r
a
t
i
o
n
)




#
#
 
C
o
n
t
r
a
c
t
:
 
S
A
M
L
 
P
O
S
T
 
M
e
t
a
d
a
t
a
 
(
D
F
N
-
A
A
I
 
I
d
P
 
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
)




*
*
S
e
r
v
i
c
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
 
→
 
D
F
N
-
A
A
I
 
I
d
P
 
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


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
P
O
S
T
 
/
a
d
m
i
n
/
r
e
a
l
m
s
/
o
p
e
n
d
e
k
/
s
e
r
v
i
c
e
s
`


*
*
A
u
t
h
*
*
:
 
U
M
C
 
a
d
m
i
n
 
(
b
a
s
i
c
 
a
u
t
h
)
 
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
 
a
d
m
i
n
 
c
l
i
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
s




*
*
R
e
q
u
e
s
t
 
v
i
a
 
U
M
C
 
(
U
n
i
v
e
n
t
i
o
n
 
M
a
n
a
g
e
m
e
n
t
 
C
o
n
s
o
l
e
)
*
*


`
`
`
h
t
t
p


P
O
S
T
 
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
/
p
o
r
t
a
l
/
s
a
m
l
2
/
i
d
p
/
m
e
t
a
d
a
t
a
 
H
T
T
P
/
1
.
1


C
o
n
t
e
n
t
-
T
y
p
e
:
 
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
/
x
-
w
w
w
-
f
o
r
m
-
u
r
l
e
n
c
o
d
e
d


A
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
:
 
B
a
s
i
c
 
u
m
d
0
1
:
<
u
m
c
-
m
a
s
t
e
r
-
p
a
s
s
w
o
r
d
>


`
`
`




*
*
R
e
q
u
e
s
t
 
B
o
d
y
*
*


`
`
`


s
p
_
n
a
m
e
=
d
f
n
-
a
a
i
&


s
p
_
u
r
l
=
h
t
t
p
s
:
/
/
i
d
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
/
a
u
t
h
/
r
e
a
l
m
s
/
o
p
e
n
d
e
k
/
s
a
m
l
&


s
p
_
l
o
g
o
u
t
=
h
t
t
p
s
:
/
/
i
d
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
/
a
u
t
h
/
r
e
a
l
m
s
/
o
p
e
n
d
e
k
/
p
r
o
t
o
c
o
l
/
s
a
m
l


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
2
0
0
 
—
 
S
P
 
M
e
t
a
d
a
t
a
)
*
*


`
`
`
x
m
l


<
?
x
m
l
 
v
e
r
s
i
o
n
=
"
1
.
0
"
 
e
n
c
o
d
i
n
g
=
"
U
T
F
-
8
"
?
>


<
m
d
:
E
n
t
i
t
y
D
e
s
c
r
i
p
t
o
r
 
e
n
t
i
t
y
I
D
=
"
h
t
t
p
s
:
/
/
i
d
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
/
a
u
t
h
/
r
e
a
l
m
s
/
o
p
e
n
d
e
k
"


 
 
x
m
l
n
s
:
m
d
=
"
u
r
n
:
o
a
s
i
s
:
n
a
m
e
s
:
t
c
:
S
A
M
L
:
2
.
0
:
m
e
t
a
d
a
t
a
"
>


 
 
<
m
d
:
I
D
P
S
S
O
D
e
s
c
r
i
p
t
o
r
 
W
a
n
t
A
u
t
h
n
R
e
q
u
e
s
t
s
S
i
g
n
e
d
=
"
t
r
u
e
"


 
 
 
 
p
r
o
t
o
c
o
l
S
u
p
p
o
r
t
E
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
=
"
u
r
n
:
o
a
s
i
s
:
n
a
m
e
s
:
t
c
:
S
A
M
L
:
2
.
0
:
p
r
o
t
o
c
o
l
"
>


 
 
 
 
<
m
d
:
S
i
n
g
l
e
S
i
g
n
O
n
S
e
r
v
i
c
e
 
B
i
n
d
i
n
g
=
"
u
r
n
:
o
a
s
i
s
:
n
a
m
e
s
:
t
c
:
S
A
M
L
:
2
.
0
:
b
i
n
d
i
n
g
s
:
H
T
T
P
-
P
O
S
T
"


 
 
 
 
 
 
L
o
c
a
t
i
o
n
=
"
h
t
t
p
s
:
/
/
i
d
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
/
a
u
t
h
/
r
e
a
l
m
s
/
o
p
e
n
d
e
k
/
p
r
o
t
o
c
o
l
/
s
a
m
l
"
/
>


 
 
 
 
<
m
d
:
K
e
y
D
e
s
c
r
i
p
t
o
r
 
u
s
e
=
"
s
i
g
n
i
n
g
"
>


 
 
 
 
 
 
<
d
s
:
K
e
y
I
n
f
o
 
x
m
l
n
s
:
d
s
=
"
h
t
t
p
:
/
/
w
w
w
.
w
3
.
o
r
g
/
2
0
0
0
/
0
9
/
x
m
l
d
s
i
g
#
"
>


 
 
 
 
 
 
 
 
<
d
s
:
X
5
0
9
D
a
t
a
>
<
d
s
:
X
5
0
9
C
e
r
t
i
f
i
c
a
t
e
>
M
I
I
C
.
.
.
C
e
r
t
.
.
.
<
/
d
s
:
X
5
0
9
C
e
r
t
i
f
i
c
a
t
e
>
<
/
d
s
:
X
5
0
9
D
a
t
a
>


 
 
 
 
 
 
<
/
d
s
:
K
e
y
I
n
f
o
>


 
 
 
 
<
/
m
d
:
K
e
y
D
e
s
c
r
i
p
t
o
r
>


 
 
<
/
m
d
:
I
D
P
S
S
O
D
e
s
c
r
i
p
t
o
r
>


<
/
m
d
:
E
n
t
i
t
y
D
e
s
c
r
i
p
t
o
r
>


`
`
`




*
*
F
e
d
 
A
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
e
d
u
G
A
I
N
 
S
t
a
n
d
a
r
d
)
*
*




|
 
A
t
t
r
i
b
u
t
e
 
|
 
S
o
u
r
c
e
 
|
 
F
e
d
e
r
a
t
i
o
n
 
C
a
t
e
g
o
r
y
 
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
-
-
-
-
-
|


|
 
`
e
d
u
P
e
r
s
o
n
P
r
i
n
c
i
p
a
l
N
a
m
e
`
 
|
 
`
p
r
e
f
e
r
r
e
d
_
u
s
e
r
n
a
m
e
@
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
 
R
e
q
u
i
r
e
d
 
|


|
 
`
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
`
 
|
 
`
s
t
u
d
e
n
t
@
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
`
 
|
 
R
e
q
u
i
r
e
d
 
|


|
 
`
e
d
u
P
e
r
s
o
n
E
n
t
i
t
l
e
m
e
n
t
`
 
|
 
`
u
r
n
:
m
a
c
e
:
o
p
e
n
d
e
s
k
.
e
d
u
:
m
e
m
b
e
r
`
 
|
 
O
p
t
i
o
n
a
l
 
|


|
 
`
m
a
i
l
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
 
u
s
e
r
 
e
m
a
i
l
 
|
 
R
e
q
u
i
r
e
d
 
|


|
 
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
 
d
i
s
p
l
a
y
 
n
a
m
e
 
|
 
O
p
t
i
o
n
a
l
 
|




-
-
-




#
#
 
C
o
n
t
r
a
c
t
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
i
l
e
n
t
 
L
o
g
i
n




*
*
S
e
r
v
i
c
e
*
*
:
 
I
n
t
e
r
c
o
m
 
→
 
C
o
n
s
u
m
i
n
g
 
s
e
r
v
i
c
e
 
(
O
X
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
 
E
l
e
m
e
n
t
)


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
P
O
S
T
 
h
t
t
p
s
:
/
/
<
i
n
t
e
r
c
o
m
>
/
a
p
i
/
s
i
l
e
n
t
-
l
o
g
i
n
`


*
*
A
u
t
h
*
*
:
 
S
h
a
r
e
d
 
s
e
c
r
e
t
 
(
H
M
A
C
-
S
H
A
2
5
6
)




#
#
#
 
R
e
q
u
e
s
t




`
`
`
j
s
o
n


{


 
 
"
c
o
n
s
u
m
e
r
"
:
 
"
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
x
"
,


 
 
"
s
h
a
r
e
d
_
s
e
c
r
e
t
"
:
 
"
<
p
r
e
-
s
h
a
r
e
d
-
s
e
c
r
e
t
>
"
,


 
 
"
t
a
r
g
e
t
_
s
e
r
v
i
c
e
"
:
 
"
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
"


}


`
`
`




#
#
#
 
R
e
s
p
o
n
s
e
 
(
S
u
c
c
e
s
s
 
—
 
2
0
0
)




`
`
`
j
s
o
n


{


 
 
"
t
a
r
g
e
t
_
u
r
l
"
:
 
"
h
t
t
p
s
:
/
/
<
t
a
r
g
e
t
-
s
e
r
v
i
c
e
>
/
i
n
d
e
x
.
h
t
m
l
"
,


 
 
"
t
o
k
e
n
"
:
 
"
<
o
p
a
q
u
e
-
s
e
s
s
i
o
n
-
t
o
k
e
n
>
"
,


 
 
"
e
x
p
i
r
e
s
_
i
n
"
:
 
3
0
0


}


`
`
`




#
#
#
 
E
r
r
o
r
 
C
o
d
e
s




|
 
C
o
d
e
 
|
 
C
o
n
d
i
t
i
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


|
 
4
0
1
 
|
 
I
n
v
a
l
i
d
 
o
r
 
e
x
p
i
r
e
d
 
s
h
a
r
e
d
 
s
e
c
r
e
t
 
|


|
 
4
0
3
 
|
 
C
o
n
s
u
m
e
r
 
n
o
t
 
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
 
f
o
r
 
t
a
r
g
e
t
 
s
e
r
v
i
c
e
 
|


|
 
5
0
2
 
|
 
T
a
r
g
e
t
 
s
e
r
v
i
c
e
 
u
n
r
e
a
c
h
a
b
l
e
 
|


|
 
5
0
4
 
|
 
T
a
r
g
e
t
 
s
e
r
v
i
c
e
 
r
e
s
p
o
n
s
e
 
t
i
m
e
o
u
t
 
|




#
#
#
 
R
e
d
i
s
 
T
o
k
e
n
 
C
a
c
h
i
n
g




T
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
 
c
a
c
h
e
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
k
e
n
s
 
i
n
 
R
e
d
i
s
 
w
i
t
h
:


-
 
K
e
y
:
 
`
i
n
t
e
r
c
o
m
:
t
o
k
e
n
:
<
c
o
n
s
u
m
e
r
>
:
<
t
a
r
g
e
t
>
`


-
 
T
T
L
:
 
3
0
0
 
s
e
c
o
n
d
s
 
(
5
 
m
i
n
u
t
e
s
)


-
 
O
n
 
c
a
c
h
e
 
h
i
t
:
 
r
e
t
u
r
n
 
c
a
c
h
e
d
 
t
o
k
e
n
 
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
t
a
c
t
i
n
g
 
t
a
r
g
e
t
 
s
e
r
v
i
c
e


-
 
O
n
 
c
a
c
h
e
 
m
i
s
s
:
 
p
e
r
f
o
r
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
,
 
c
a
c
h
e
 
r
e
s
u
l
t




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
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
 
N
a
v
i
g
a
t
i
o
n




*
*
S
e
r
v
i
c
e
*
*
:
 
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
 
A
l
l
 
c
o
n
s
u
m
i
n
g
 
s
e
r
v
i
c
e
s


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
G
E
T
 
h
t
t
p
s
:
/
/
u
m
s
-
p
o
r
t
a
l
-
s
e
r
v
e
r
/
p
o
r
t
a
l
/
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
j
s
o
n
`


*
*
A
u
t
h
*
*
:
 
H
T
T
P
 
B
a
s
i
c
 
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
_
u
s
e
r
n
a
m
e
`
 
/
 
`
s
e
c
r
e
t
s
.
c
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
.
a
p
i
K
e
y
`
)




#
#
#
 
R
e
s
p
o
n
s
e
 
(
2
0
0
)




`
`
`
j
s
o
n


{


 
 
"
e
n
t
r
i
e
s
"
:
 
[


 
 
 
 
{


 
 
 
 
 
 
"
i
d
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
n
a
m
e
"
:
 
"
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
,


 
 
 
 
 
 
"
u
r
l
"
:
 
"
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
<
d
o
m
a
i
n
>
"
,


 
 
 
 
 
 
"
i
c
o
n
"
:
 
"
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
,
.
.
.
"
,


 
 
 
 
 
 
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
"
:
 
"
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
 
s
h
a
r
i
n
g
"


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
"
i
d
"
:
 
"
i
l
i
a
s
"
,


 
 
 
 
 
 
"
n
a
m
e
"
:
 
"
I
L
I
A
S
"
,


 
 
 
 
 
 
"
u
r
l
"
:
 
"
h
t
t
p
s
:
/
/
i
l
i
a
s
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
<
d
o
m
a
i
n
>
"
,


 
 
 
 
 
 
"
i
c
o
n
"
:
 
"
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
,
.
.
.
"
,


 
 
 
 
 
 
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
"
:
 
"
L
e
a
r
n
i
n
g
 
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
 
s
y
s
t
e
m
"


 
 
 
 
}


 
 
]


}


`
`
`




#
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
i
o
n
 
P
o
i
n
t




S
e
r
v
i
c
e
s
 
e
m
b
e
d
 
t
h
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
 
b
a
r
 
b
y
 
f
e
t
c
h
i
n
g
 
t
h
i
s
 
J
S
O
N
 
a
t
 
s
t
a
r
t
u
p
.


T
h
e
 
r
e
s
p
o
n
s
e
 
i
s
 
c
a
c
h
e
d
 
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
.
 
W
h
e
n
 
a
 
s
e
r
v
i
c
e
 
i
s
 
d
i
s
a
b
l
e
d
 
(
n
o
t
 
d
e
p
l
o
y
e
d
)
,


i
t
 
i
s
 
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
 
r
e
s
p
o
n
s
e
 
b
y
 
t
h
e
 
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
 
s
e
r
v
e
r
.




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
W
O
P
I
 
D
i
s
c
o
v
e
r
y
 
a
n
d
 
C
h
e
c
k
F
i
l
e
I
n
f
o




*
*
S
e
r
v
i
c
e
*
*
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
/
O
p
e
n
C
l
o
u
d
 
→
 
C
o
l
l
a
b
o
r
a


*
*
D
i
s
c
o
v
e
r
y
*
*
:
 
`
G
E
T
 
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
h
o
s
t
i
n
g
/
d
i
s
c
o
v
e
r
y
`


*
*
C
h
e
c
k
F
i
l
e
I
n
f
o
*
*
:
 
`
G
E
T
 
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
o
>
/
c
o
o
l
/
w
o
p
i
/
f
i
l
e
s
/
<
f
i
l
e
I
d
>
?
a
c
c
e
s
s
_
t
o
k
e
n
=
<
t
o
k
e
n
>
`




#
#
#
 
D
i
s
c
o
v
e
r
y
 
R
e
s
p
o
n
s
e
 
(
2
0
0
)




`
`
`
x
m
l


<
?
x
m
l
 
v
e
r
s
i
o
n
=
"
1
.
0
"
 
e
n
c
o
d
i
n
g
=
"
u
t
f
-
8
"
?
>


<
w
o
p
i
-
d
i
s
c
o
v
e
r
y
>


 
 
<
a
p
p
 
n
a
m
e
=
"
C
o
l
l
a
b
o
r
a
 
W
r
i
t
e
r
"
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
o
d
t
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
w
r
i
t
e
r
.
h
t
m
l
"
/
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
d
o
c
x
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
w
r
i
t
e
r
.
h
t
m
l
"
/
>


 
 
<
/
a
p
p
>


 
 
<
a
p
p
 
n
a
m
e
=
"
C
o
l
l
a
b
o
r
a
 
C
a
l
c
"
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
o
d
s
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
c
a
l
c
.
h
t
m
l
"
/
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
x
l
s
x
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
c
a
l
c
.
h
t
m
l
"
/
>


 
 
<
/
a
p
p
>


 
 
<
a
p
p
 
n
a
m
e
=
"
C
o
l
l
a
b
o
r
a
 
I
m
p
r
e
s
s
"
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
o
d
p
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
i
m
p
r
e
s
s
.
h
t
m
l
"
/
>


 
 
 
 
<
a
c
t
i
o
n
 
e
x
t
=
"
p
p
t
x
"
 
n
a
m
e
=
"
e
d
i
t
"
 
u
r
l
s
r
c
=
"
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
b
r
o
w
s
e
r
/
c
o
o
l
i
m
p
r
e
s
s
.
h
t
m
l
"
/
>


 
 
<
/
a
p
p
>


<
/
w
o
p
i
-
d
i
s
c
o
v
e
r
y
>


`
`
`




#
#
#
 
C
h
e
c
k
F
i
l
e
I
n
f
o
 
R
e
s
p
o
n
s
e
 
(
2
0
0
)




`
`
`
j
s
o
n


{


 
 
"
B
a
s
e
F
i
l
e
N
a
m
e
"
:
 
"
d
o
c
u
m
e
n
t
.
o
d
t
"
,


 
 
"
O
w
n
e
r
I
d
"
:
 
"
u
s
e
r
-
u
u
i
d
"
,


 
 
"
S
i
z
e
"
:
 
1
2
3
4
5
,


 
 
"
U
s
e
r
I
d
"
:
 
"
u
s
e
r
-
u
u
i
d
"
,


 
 
"
U
s
e
r
C
a
n
W
r
i
t
e
"
:
 
t
r
u
e
,


 
 
"
V
e
r
s
i
o
n
"
:
 
"
e
t
a
g
-
v
a
l
u
e
"
,


 
 
"
L
a
s
t
M
o
d
i
f
i
e
d
T
i
m
e
"
:
 
"
2
0
2
6
-
0
1
-
1
5
T
1
0
:
3
0
:
0
0
Z
"


}


`
`
`




#
#
#
 
C
h
e
c
k
F
i
l
e
I
n
f
o
 
R
e
q
u
e
s
t
 
P
a
r
a
m
e
t
e
r
s




|
 
P
a
r
a
m
e
t
e
r
 
|
 
R
e
q
u
i
r
e
d
 
|
 
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
 
`
a
c
c
e
s
s
_
t
o
k
e
n
`
 
|
 
Y
e
s
 
|
 
O
A
u
t
h
 
t
o
k
e
n
 
f
r
o
m
 
W
O
P
I
 
h
o
s
t
 
|


|
 
`
f
i
l
e
I
d
`
 
|
 
Y
e
s
 
|
 
U
n
i
q
u
e
 
f
i
l
e
 
i
d
e
n
t
i
f
i
e
r
 
f
r
o
m
 
h
o
s
t
 
|




#
#
#
 
G
e
t
F
i
l
e
 
E
n
d
p
o
i
n
t
 
(
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
 
c
o
n
t
e
n
t
)




`
`
`


G
E
T
 
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
c
o
o
l
/
w
o
p
i
/
f
i
l
e
s
/
<
f
i
l
e
I
d
>
/
c
o
n
t
e
n
t
s
?
a
c
c
e
s
s
_
t
o
k
e
n
=
<
t
o
k
e
n
>


`
`
`




#
#
#
 
P
u
t
F
i
l
e
 
E
n
d
p
o
i
n
t
 
(
f
o
r
 
s
a
v
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
)




`
`
`


P
O
S
T
 
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
o
>
/
c
o
o
l
/
w
o
p
i
/
f
i
l
e
s
/
<
f
i
l
e
I
d
>
/
c
o
n
t
e
n
t
s
?
a
c
c
e
s
s
_
t
o
k
e
n
=
<
t
o
k
e
n
>


C
o
n
t
e
n
t
-
T
y
p
e
:
 
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
/
o
c
t
e
t
-
s
t
r
e
a
m


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
S
u
c
c
e
s
s
 
—
 
2
0
0
)
*
*


`
`
`
j
s
o
n


{


 
 
"
L
a
s
t
M
o
d
i
f
i
e
d
T
i
m
e
"
:
 
"
2
0
2
6
-
0
1
-
1
5
T
1
1
:
4
5
:
0
0
Z
"


}


`
`
`




#
#
 
C
o
n
t
r
a
c
t
:
 
W
O
P
I
 
S
a
v
e
C
h
i
l
d




#
#
#
 
S
a
v
e
C
h
i
l
d
 
E
n
d
p
o
i
n
t
 
(
f
o
r
 
c
r
e
a
t
i
n
g
 
n
e
w
 
d
o
c
u
m
e
n
t
s
)




*
*
S
e
r
v
i
c
e
*
*
:
 
H
o
s
t
 
→
 
C
o
l
l
a
b
o
r
a
 
→
 
C
r
e
a
t
e
s
 
n
e
w
 
d
o
c
u
m
e
n
t
 
i
n
 
s
a
m
e
 
f
o
l
d
e
r




`
`
`


P
O
S
T
 
h
t
t
p
s
:
/
/
<
c
o
l
l
a
b
o
r
a
>
/
c
o
o
l
/
w
o
p
i
/
f
i
l
e
s
/
<
f
i
l
e
I
d
>
/
c
h
i
l
d
r
e
n
?
a
c
c
e
s
s
_
t
o
k
e
n
=
<
t
o
k
e
n
>


C
o
n
t
e
n
t
-
T
y
p
e
:
 
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
/
j
s
o
n


`
`
`




*
*
R
e
q
u
e
s
t
 
B
o
d
y
*
*


`
`
`
j
s
o
n


{


 
 
"
n
a
m
e
"
:
 
"
N
e
w
 
D
o
c
u
m
e
n
t
.
o
d
t
"
,


 
 
"
u
r
l
"
:
 
"
"


}


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
S
u
c
c
e
s
s
 
—
 
2
0
0
)
*
*


`
`
`
j
s
o
n


{


 
 
"
N
a
m
e
"
:
 
"
N
e
w
 
D
o
c
u
m
e
n
t
.
o
d
t
"
,


 
 
"
U
r
l
"
:
 
"
h
t
t
p
s
:
/
/
<
h
o
s
t
>
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
a
p
p
s
/
f
i
l
e
s
?
d
i
r
=
/
p
a
t
h
/
n
e
w
-
d
o
c
u
m
e
n
t
.
o
d
t
"
,


 
 
"
H
o
s
t
E
d
i
t
U
r
l
"
:
 
"
"
,


 
 
"
H
o
s
t
V
i
e
w
U
r
l
"
:
 
"
"
,


 
 
"
W
r
i
t
e
R
e
q
u
i
r
e
d
"
:
 
t
r
u
e


}


`
`
`




-
-
-




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
B
B
B
 
G
r
e
e
n
l
i
g
h
t
 
R
o
o
m
 
A
P
I




*
*
S
e
r
v
i
c
e
*
*
:
 
G
r
e
e
n
l
i
g
h
t
 
(
M
o
o
d
l
e
 
c
u
s
t
o
m
)
 
→
 
B
B
B
 
B
a
c
k
e
n
d


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
P
O
S
T
 
h
t
t
p
s
:
/
/
<
b
b
b
-
s
e
r
v
e
r
>
/
a
p
i
/
c
r
e
a
t
e
`


*
*
A
u
t
h
*
*
:
 
`
B
I
G
B
L
U
E
B
U
T
T
O
N
_
S
E
C
R
E
T
`
 
c
h
e
c
k
s
u
m




#
#
#
 
R
e
q
u
e
s
t




`
`
`


P
O
S
T
 
/
a
p
i
/
c
r
e
a
t
e
?
n
a
m
e
=
R
o
o
m
+
N
a
m
e
&
m
e
e
t
i
n
g
I
D
=
r
o
o
m
-
u
u
i
d


 
 
&
c
h
e
c
k
s
u
m
=
<
s
h
a
1
(
m
e
e
t
i
n
g
I
D
+
B
I
G
B
L
U
E
B
U
T
T
O
N
_
S
E
C
R
E
T
)
>


`
`
`




#
#
#
 
R
e
s
p
o
n
s
e
 
(
S
u
c
c
e
s
s
 
—
 
2
0
0
)




`
`
`
x
m
l


<
r
e
s
p
o
n
s
e
>


 
 
<
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
>
S
U
C
C
E
S
S
<
/
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
>


 
 
<
m
e
e
t
i
n
g
I
D
>
r
o
o
m
-
u
u
i
d
<
/
m
e
e
t
i
n
g
I
D
>


 
 
<
i
n
t
e
r
n
a
l
M
e
e
t
i
n
g
I
D
>
i
n
t
e
r
n
a
l
-
u
u
i
d
<
/
i
n
t
e
r
n
a
l
M
e
e
t
i
n
g
I
D
>


 
 
<
a
t
t
e
n
d
e
e
P
W
>
a
t
t
e
n
d
e
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
<
/
a
t
t
e
n
d
e
e
P
W
>


 
 
<
m
o
d
e
r
a
t
o
r
P
W
>
m
o
d
e
r
a
t
o
r
-
p
a
s
s
w
o
r
d
<
/
m
o
d
e
r
a
t
o
r
P
W
>


 
 
<
c
r
e
a
t
e
T
i
m
e
>
1
7
0
5
3
1
2
2
0
0
0
0
0
<
/
c
r
e
a
t
e
T
i
m
e
>


<
/
r
e
s
p
o
n
s
e
>


`
`
`




#
#
#
 
E
r
r
o
r
 
R
e
s
p
o
n
s
e




`
`
`
x
m
l


<
r
e
s
p
o
n
s
e
>


 
 
<
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
>
F
A
I
L
E
D
<
/
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
>


 
 
<
m
e
s
s
a
g
e
K
e
y
>
c
h
e
c
k
s
u
m
E
r
r
o
r
<
/
m
e
s
s
a
g
e
K
e
y
>


 
 
<
m
e
s
s
a
g
e
>
Y
o
u
 
d
i
d
 
n
o
t
 
p
a
s
s
 
t
h
e
 
c
o
r
r
e
c
t
 
c
h
e
c
k
s
u
m
<
/
m
e
s
s
a
g
e
>


<
/
r
e
s
p
o
n
s
e
>


`
`
`




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
L
D
A
P
 
B
i
n
d
 
a
n
d
 
S
e
a
r
c
h




*
*
S
e
r
v
i
c
e
*
*
:
 
A
l
l
 
L
D
A
P
 
c
o
n
s
u
m
e
r
s
 
→
 
O
p
e
n
L
D
A
P


*
*
E
n
d
p
o
i
n
t
*
*
:
 
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
l
d
a
p
:
3
8
9
`
 
(
o
r
 
`
l
d
a
p
s
:
/
/
o
p
e
n
l
d
a
p
:
6
3
6
`
)


*
*
A
u
t
h
*
*
:
 
B
i
n
d
 
D
N
 
+
 
p
a
s
s
w
o
r
d




#
#
#
 
B
i
n
d




`
`
`


B
I
N
D
 
D
N
:
 
"
u
i
d
=
l
d
a
p
s
e
a
r
c
h
_
n
e
x
t
c
l
o
u
d
,
c
n
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
e
d
u
"


B
I
N
D
 
P
W
:
 
<
s
e
c
r
e
t
>


`
`
`




#
#
#
 
S
e
a
r
c
h
 
(
g
r
o
u
p
 
m
e
m
b
e
r
s
)




`
`
`


B
A
S
E
:
 
"
o
u
=
g
r
o
u
p
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
e
d
u
"


S
C
O
P
E
:
 
s
u
b


F
I
L
T
E
R
:
 
"
(
c
n
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
u
s
e
r
s
)
"


A
T
T
R
S
:
 
"
m
e
m
b
e
r
"


`
`
`




#
#
#
 
S
e
a
r
c
h
 
(
u
s
e
r
 
l
o
o
k
u
p
)




`
`
`


B
A
S
E
:
 
"
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
e
d
u
"


S
C
O
P
E
:
 
s
u
b


F
I
L
T
E
R
:
 
"
(
u
i
d
=
j
d
o
e
)
"


A
T
T
R
S
:
 
"
c
n
"
,
 
"
m
a
i
l
"
,
 
"
u
i
d
"
,
 
"
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
"
,
 
"
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
"


`
`
`




#
#
#
 
B
i
n
d
 
F
i
e
l
d
s
 
C
o
n
v
e
n
t
i
o
n




A
l
l
 
L
D
A
P
 
c
l
i
e
n
t
s
 
u
s
e
 
`
(
u
i
d
,
 
m
a
i
l
)
`
 
a
s
 
`
b
i
n
d
F
i
e
l
d
s
`
 
f
o
r
 
u
s
e
r
 
l
o
o
k
u
p
.




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
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




*
*
S
e
r
v
i
c
e
*
*
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
 
E
l
e
m
e
n
t
,
 
N
o
t
e
s
,
 
I
L
I
A
S
 
→
 
M
i
n
I
O


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
h
t
t
p
s
:
/
/
m
i
n
i
o
:
9
0
0
0
`


*
*
A
u
t
h
*
*
:
 
A
c
c
e
s
s
 
k
e
y
 
+
 
s
e
c
r
e
t
 
k
e
y




#
#
#
 
B
u
c
k
e
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
s




|
 
O
p
e
r
a
t
i
o
n
 
|
 
M
e
t
h
o
d
 
|
 
P
a
t
h
 
|
 
H
e
a
d
e
r
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
u
t
 
o
b
j
e
c
t
 
|
 
P
U
T
 
|
 
`
/
<
b
u
c
k
e
t
>
/
<
p
a
t
h
>
`
 
|
 
`
C
o
n
t
e
n
t
-
L
e
n
g
t
h
`
,
 
`
C
o
n
t
e
n
t
-
T
y
p
e
`
 
|


|
 
G
e
t
 
o
b
j
e
c
t
 
|
 
G
E
T
 
|
 
`
/
<
b
u
c
k
e
t
>
/
<
p
a
t
h
>
`
 
|
 
—
 
|


|
 
D
e
l
e
t
e
 
o
b
j
e
c
t
 
|
 
D
E
L
E
T
E
 
|
 
`
/
<
b
u
c
k
e
t
>
/
<
p
a
t
h
>
`
 
|
 
—
 
|


|
 
L
i
s
t
 
o
b
j
e
c
t
s
 
|
 
G
E
T
 
|
 
`
/
<
b
u
c
k
e
t
>
?
l
i
s
t
-
t
y
p
e
=
2
`
 
|
 
—
 
|




#
#
#
 
P
e
r
-
S
e
r
v
i
c
e
 
B
u
c
k
e
t
s




|
 
S
e
r
v
i
c
e
 
|
 
B
u
c
k
e
t
 
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
|


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
 
|
 
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
-
d
a
t
a
`
 
|
 
P
r
i
m
a
r
y
 
s
t
o
r
a
g
e
,
 
p
a
t
h
-
s
t
y
l
e
 
|


|
 
O
p
e
n
C
l
o
u
d
 
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
 
|
 
C
S
3
 
s
y
n
c
 
t
a
r
g
e
t
 
|


|
 
E
l
e
m
e
n
t
 
|
 
`
e
l
e
m
e
n
t
-
m
e
d
i
a
`
 
|
 
M
e
d
i
a
 
f
i
l
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
 
N
o
t
e
s
 
|
 
`
n
o
t
e
s
-
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
`
 
|
 
N
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
 
|


|
 
I
L
I
A
S
 
|
 
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
 
|
 
C
o
u
r
s
e
 
f
i
l
e
s
,
 
S
C
O
R
M
 
p
a
c
k
a
g
e
s
 
|


|
 
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
f
i
l
e
s
`
 
|
 
P
r
o
j
e
c
t
 
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
 
|




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
C
l
a
m
A
V
 
I
C
A
P
 
S
c
a
n




*
*
S
e
r
v
i
c
e
*
*
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
 
→
 
C
l
a
m
A
V


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
i
c
a
p
:
/
/
c
l
a
m
a
v
-
i
c
a
p
:
1
3
4
4
/
a
v
s
c
a
n
`


*
*
A
u
t
h
*
*
:
 
N
o
n
e
 
(
i
n
t
e
r
n
a
l
 
n
e
t
w
o
r
k
)




#
#
#
 
I
C
A
P
 
R
e
q
u
e
s
t




`
`
`


R
E
Q
M
O
D
 
i
c
a
p
:
/
/
c
l
a
m
a
v
-
i
c
a
p
:
1
3
4
4
/
a
v
s
c
a
n
 
I
C
A
P
/
1
.
0


H
o
s
t
:
 
c
l
a
m
a
v
-
i
c
a
p


E
n
c
a
p
s
u
l
a
t
e
d
:
 
r
e
q
-
h
e
a
d
e
r
=
0
,
 
n
u
l
l
-
b
o
d
y
=
0


`
`
`




#
#
#
 
R
e
s
p
o
n
s
e
 
(
C
l
e
a
n
 
—
 
2
0
4
)




`
`
`


I
C
A
P
/
1
.
0
 
2
0
4
 
N
o
 
C
o
n
t
e
n
t


`
`
`




#
#
#
 
R
e
s
p
o
n
s
e
 
(
I
n
f
e
c
t
e
d
 
—
 
2
0
0
)




`
`
`


I
C
A
P
/
1
.
0
 
2
0
0
 
O
K


X
-
I
n
f
e
c
t
i
o
n
-
F
o
u
n
d
:
 
T
y
p
e
=
0
;
 
R
e
s
o
l
u
t
i
o
n
=
2
;
 
T
h
r
e
a
t
=
W
9
7
M
.
D
o
w
n
l
o
a
d
e
r
;


X
-
V
i
r
u
s
-
I
D
:
 
W
9
7
M
.
D
o
w
n
l
o
a
d
e
r


`
`
`




N
e
x
t
c
l
o
u
d
 
q
u
a
r
a
n
t
i
n
e
s
 
t
h
e
 
f
i
l
e
 
w
h
e
n
 
`
X
-
I
n
f
e
c
t
i
o
n
-
F
o
u
n
d
`
 
h
e
a
d
e
r
 
i
s
 
p
r
e
s
e
n
t
.




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
N
o
t
i
f
y
 
P
u
s
h
 
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
S
e
r
v
i
c
e
*
*
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
 
N
o
t
i
f
y
 
P
u
s
h
 
→
 
B
r
o
w
s
e
r
 
c
l
i
e
n
t
s


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
w
s
s
:
/
/
<
n
e
x
t
c
l
o
u
d
>
/
p
u
s
h
`


*
*
A
u
t
h
*
*
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
 
c
o
o
k
i
e
 
o
r
 
O
I
D
C
 
t
o
k
e
n




#
#
#
 
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




`
`
`


G
E
T
 
/
p
u
s
h
 
H
T
T
P
/
1
.
1


U
p
g
r
a
d
e
:
 
w
e
b
s
o
c
k
e
t


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
:
 
U
p
g
r
a
d
e


C
o
o
k
i
e
:
 
<
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
s
e
s
s
i
o
n
-
c
o
o
k
i
e
>


`
`
`




#
#
#
 
M
e
s
s
a
g
e
 
F
o
r
m
a
t
 
(
S
e
r
v
e
r
 
→
 
C
l
i
e
n
t
)




`
`
`
j
s
o
n


{


 
 
"
e
n
v
e
l
o
p
e
"
:
 
{


 
 
 
 
"
t
y
p
e
"
:
 
"
n
o
t
i
f
y
"
,


 
 
 
 
"
a
p
p
i
d
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,


 
 
 
 
"
s
u
b
j
e
c
t
"
:
 
"
f
i
l
e
s
"
,


 
 
 
 
"
s
u
b
j
e
c
t
_
p
a
r
a
m
s
"
:
 
[
]
,


 
 
 
 
"
m
e
s
s
a
g
e
"
:
 
"
S
h
a
r
e
d
 
w
i
t
h
 
y
o
u
"
,


 
 
 
 
"
o
b
j
e
c
t
_
t
y
p
e
"
:
 
"
f
i
l
e
s
"
,


 
 
 
 
"
o
b
j
e
c
t
_
i
d
"
:
 
"
1
2
3
4
5
"
,


 
 
 
 
"
u
s
e
r
_
i
d
"
:
 
"
j
d
o
e
"


 
 
}
,


 
 
"
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
"
:
 
[


 
 
 
 
{


 
 
 
 
 
 
"
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
_
i
d
"
:
 
4
2
,


 
 
 
 
 
 
"
a
p
p
"
:
 
"
f
i
l
e
s
_
s
h
a
r
i
n
g
"
,


 
 
 
 
 
 
"
s
u
b
j
e
c
t
"
:
 
"
S
h
a
r
e
d
 
w
i
t
h
 
y
o
u
"
,


 
 
 
 
 
 
"
o
b
j
e
c
t
_
t
y
p
e
"
:
 
"
f
i
l
e
s
"
,


 
 
 
 
 
 
"
o
b
j
e
c
t
_
i
d
"
:
 
"
1
2
3
4
5
"


 
 
 
 
}


 
 
]


}


`
`
`




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
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




*
*
S
e
r
v
i
c
e
*
*
:
 
S
O
G
o
,
 
P
o
s
t
f
i
x
 
→
 
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
 
S
e
r
v
e
r


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
i
m
a
p
:
/
/
d
o
v
e
c
o
t
:
1
4
3
`
 
(
S
T
A
R
T
T
L
S
)
 
o
r
 
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
 
(
S
S
L
)


*
*
A
u
t
h
*
*
:
 
C
l
e
a
r
-
t
e
x
t
 
p
a
s
s
w
o
r
d
 
f
r
o
m
 
K
e
y
c
l
o
a
k
L
D
A
P
 
→
 
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
 
v
i
a
 
`
S
E
C
R
E
T
=
$
{
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
}
`




#
#
#
 
I
M
A
P
 
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




`
`
`


A
 
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


*
 
C
A
P
A
B
I
L
I
T
Y
 
I
M
A
P
4
r
e
v
1
 
S
T
A
R
T
T
L
S
 
A
U
T
H
=
P
L
A
I
N
 
A
U
T
H
=
L
O
G
I
N
 
A
U
T
H
=
C
R
A
M
-
M
D
5
 
Q
R
E
S
Y
N
C


C
 
L
O
G
I
N
 
j
d
o
e
 
<
p
a
s
s
w
o
r
d
>


*
 
O
K
 
[
C
A
P
A
B
I
L
I
T
Y
 
I
M
A
P
4
r
e
v
1
 
S
T
A
R
T
T
L
S
 
A
U
T
H
=
P
L
A
I
N
 
.
.
.
]
 
L
o
g
g
e
d
 
i
n


C
 
S
E
L
E
C
T
 
I
N
B
O
X


*
 
1
 
E
X
I
S
T
S


*
 
1
 
R
E
C
E
N
T


*
 
O
K
 
[
U
N
S
E
E
N
 
1
]
 
M
e
s
s
a
g
e
 
1
 
i
s
 
f
i
r
s
t
 
u
n
s
e
e
n


C
 
F
E
T
C
H
 
1
 
R
F
C
8
2
2


*
 
1
 
F
E
T
C
H
 
(
R
F
C
8
2
2
 
{
5
0
0
}


.
.
.


)


C
 
L
O
G
O
U
T


`
`
`




#
#
#
 
I
M
A
P
 
F
o
l
d
e
r
s




|
 
F
o
l
d
e
r
 
|
 
U
s
a
g
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
 
`
I
N
B
O
X
`
 
|
 
I
n
c
o
m
i
n
g
 
m
e
s
s
a
g
e
s
 
|
 
S
O
G
o
,
 
P
o
s
t
f
i
x
 
|


|
 
`
S
e
n
t
`
 
|
 
S
e
n
t
 
m
e
s
s
a
g
e
s
 
|
 
S
O
G
o
 
|


|
 
`
D
r
a
f
t
s
`
 
|
 
D
r
a
f
t
 
m
e
s
s
a
g
e
s
 
|
 
S
O
G
o
 
|


|
 
`
J
u
n
k
`
 
|
 
S
p
a
m
 
f
o
l
d
e
r
 
|
 
S
O
G
o
,
 
S
p
a
m
A
s
s
a
s
s
i
n
 
|


|
 
`
T
r
a
s
h
`
 
|
 
D
e
l
e
t
e
d
 
m
e
s
s
a
g
e
s
 
|
 
S
O
G
o
 
|


|
 
`
A
r
c
h
i
v
e
`
 
|
 
A
r
c
h
i
v
e
d
 
m
e
s
s
a
g
e
s
 
|
 
S
O
G
o
 
|




#
#
#
 
I
M
A
P
 
S
S
L
/
T
L
S
 
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
C
e
r
t
i
f
i
c
a
t
e
*
*
:
 
`
*
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
 
w
i
l
d
c
a
r
d
 
c
e
r
t
 
f
r
o
m
 
`
s
e
c
r
e
t
s
.
t
l
s
`


*
*
C
i
p
h
e
r
 
S
u
i
t
e
*
*
:
 
T
L
S
v
1
.
2
+
 
w
i
t
h
 
E
C
D
H
E
-
R
S
A
-
A
E
S
2
5
6
-
G
C
M
-
S
H
A
3
8
4




-
-
-




#
#
 
C
o
n
t
r
a
c
t
:
 
P
o
s
t
f
i
x
 
S
M
T
P
 
(
S
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




*
*
S
e
r
v
i
c
e
*
*
:
 
S
O
G
o
,
 
o
t
h
e
r
 
m
a
i
l
 
s
e
r
v
i
c
e
s
 
→
 
P
o
s
t
f
i
x
 
S
M
T
P
 
S
e
r
v
e
r


*
*
E
n
d
p
o
i
n
t
*
*
:
 
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
2
5
`
 
(
S
T
A
R
T
T
L
S
)
 
o
r
 
`
s
m
t
p
s
:
/
/
p
o
s
t
f
i
x
:
4
6
5
`
 
(
S
S
L
)


*
*
A
u
t
h
*
*
:
 
S
A
S
L
 
P
L
A
I
N
 
f
r
o
m
 
K
e
y
c
l
o
a
k
L
D
A
P




#
#
#
 
S
M
T
P
 
S
u
b
m
i
s
s
i
o
n




`
`
`


E
H
L
O
 
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


E
H
L
O
 
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


S
T
A
R
T
T
L
S


M
A
I
L
 
F
R
O
M
:
<
j
d
o
e
@
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
>


R
C
P
T
 
T
O
:
<
r
e
c
i
p
i
e
n
t
@
e
x
t
e
r
n
a
l
.
e
d
u
>


D
A
T
A


S
u
b
j
e
c
t
:
 
T
e
s
t
 
M
e
s
s
a
g
e


F
r
o
m
:
 
j
d
o
e
@
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


T
o
:
 
r
e
c
i
p
i
e
n
t
@
e
x
t
e
r
n
a
l
.
e
d
u




T
h
i
s
 
i
s
 
a
 
t
e
s
t
 
m
e
s
s
a
g
e
.


.


Q
U
I
T


`
`
`




#
#
#
 
S
M
T
P
 
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
i
o
n




`
`
`


A
U
T
H
 
P
L
A
I
N
 
A
G
p
k
b
2
U
A
b
X
l
w
Y
X
N
z
d
2
9
y
Z
A
=
=


`
`
`




W
h
e
r
e
 
`
A
G
p
k
b
2
U
A
b
X
l
w
Y
X
N
z
d
2
9
y
Z
A
=
=
`
 
i
s
 
B
a
s
e
6
4
(
`
\
0
j
d
o
e
\
0
m
y
p
a
s
s
w
o
r
d
`
)




#
#
#
 
P
o
s
t
f
i
x
 
Q
u
e
u
e
 
M
a
n
a
g
e
m
e
n
t




|
 
Q
u
e
u
e
 
|
 
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
 
|


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
-
-
|


|
 
`
i
n
c
o
m
i
n
g
`
 
|
 
M
e
s
s
a
g
e
s
 
r
e
c
e
i
v
e
d
 
f
r
o
m
 
n
e
t
w
o
r
k
 
|


|
 
`
a
c
t
i
v
e
`
 
|
 
M
e
s
s
a
g
e
s
 
b
e
i
n
g
 
d
e
l
i
v
e
r
e
d
 
|


|
 
`
d
e
f
e
r
r
e
d
`
 
|
 
T
e
m
p
o
r
a
r
y
 
d
e
l
i
v
e
r
y
 
f
a
i
l
u
r
e
s
 
|


|
 
`
c
o
r
r
u
p
t
`
 
|
 
U
n
r
e
a
d
a
b
l
e
 
q
u
e
u
e
 
f
i
l
e
s
 
|


|
 
`
h
o
l
d
`
 
|
 
M
e
s
s
a
g
e
s
 
o
n
 
h
o
l
d
 
(
a
d
m
i
n
)
 
|




#
#
#
 
P
o
s
t
f
i
x
 
F
i
l
t
e
r
s




*
*
S
p
a
m
A
s
s
a
s
s
i
n
*
*
 
-
 
S
p
a
m
 
s
c
o
r
i
n
g
,
 
m
o
v
e
s
 
t
o
 
`
$
J
U
N
K
`
 
f
o
l
d
e
r


*
*
A
m
a
v
i
s
*
*
 
-
 
C
o
n
t
e
n
t
 
f
i
l
t
e
r
i
n
g
,
 
a
t
t
a
c
h
e
s
 
`
X
-
S
p
a
m
-
S
t
a
t
u
s
`
 
h
e
a
d
e
r
s




-
-
-




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
 
t
o
k
e
n
 
e
n
d
p
o
i
n
t
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
 
r
e
l
a
y
)


-
 
A
l
l
 
O
I
D
C
/
S
A
M
L
 
c
l
i
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
]
(
.
.
/
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
-
w
o
r
k
f
l
o
w
s
)
 
(
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
 
f
l
o
w
s
 
u
s
i
n
g
 
t
h
e
s
e
 
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


-
 
[
S
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
]
(
.
.
/
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
)
 
(
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
e
r
v
i
c
e
 
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
A
U
T
H
 
a
n
d
 
T
O
K
E
N
 
r
e
l
a
t
i
o
n
s
h
i
p
 
t
y
p
e
s
)




#
#
 
C
o
n
t
r
a
c
t
 
I
n
d
e
x




|
 
C
o
n
t
r
a
c
t
 
|
 
P
r
o
t
o
c
o
l
 
|
 
S
e
r
v
i
c
e
s
 
I
n
v
o
l
v
e
d
 
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
-
-
-
|


|
 
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
 
|
 
H
T
T
P
S
 
|
 
A
l
l
 
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
s
 
(
9
 
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


|
 
K
e
y
c
l
o
a
k
 
S
A
M
L
 
2
.
0
 
S
P
-
S
S
O
 
|
 
S
A
M
L
 
2
.
0
 
|
 
A
l
l
 
S
A
M
L
 
S
P
s
 
(
8
 
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


|
 
S
A
M
L
 
P
O
S
T
 
M
e
t
a
d
a
t
a
 
(
D
F
N
-
A
A
I
)
 
|
 
H
T
T
P
S
 
+
 
X
M
L
 
|
 
K
e
y
c
l
o
a
k
 
→
 
D
F
N
-
A
A
I
 
I
d
P
 
|


|
 
I
n
t
e
r
c
o
m
 
S
i
l
e
n
t
 
L
o
g
i
n
 
|
 
H
T
T
P
S
 
|
 
O
X
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
 
E
l
e
m
e
n
t
 
|


|
 
N
u
b
u
s
 
N
a
v
i
g
a
t
i
o
n
 
|
 
H
T
T
P
S
 
|
 
A
l
l
 
p
o
r
t
a
l
-
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
 
s
e
r
v
i
c
e
s
 
|


|
 
W
O
P
I
 
D
i
s
c
o
v
e
r
y
 
+
 
C
h
e
c
k
F
i
l
e
I
n
f
o
 
|
 
H
T
T
P
S
 
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
 
↔
 
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
 
X
W
i
k
i
 
|


|
 
W
O
P
I
 
S
a
v
e
C
h
i
l
d
 
|
 
H
T
T
P
S
 
|
 
O
p
e
n
C
l
o
u
d
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
/
X
W
i
k
i
 
→
 
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


|
 
B
B
B
 
R
o
o
m
 
A
P
I
 
|
 
H
T
T
P
S
 
|
 
B
B
B
 
b
a
c
k
e
n
d
 
|


|
 
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
 
|
 
L
D
A
P
 
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
,
 
S
S
P
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
 
K
e
y
c
l
o
a
k
 
|


|
 
S
3
 
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
 
|
 
S
3
 
A
P
I
 
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
 
E
l
e
m
e
n
t
,
 
N
o
t
e
s
,
 
I
L
I
A
S
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


|
 
C
l
a
m
A
V
 
I
C
A
P
 
S
c
a
n
 
|
 
I
C
A
P
 
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
 
|


|
 
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
 
|
 
I
M
A
P
/
I
M
A
P
S
 
|
 
S
O
G
o
,
 
P
o
s
t
f
i
x
 
|


|
 
P
o
s
t
f
i
x
 
S
M
T
P
 
S
u
b
m
i
s
s
i
o
n
 
|
 
S
M
T
P
/
S
M
T
P
S
 
|
 
S
O
G
o
,
 
o
t
h
e
r
 
m
a
i
l
 
s
e
r
v
i
c
e
s
 
|


|
 
N
o
t
i
f
y
 
P
u
s
h
 
W
e
b
S
o
c
k
e
t
 
|
 
W
e
b
S
o
c
k
e
t
 
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
 
|

