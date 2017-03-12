`users/ GET | POST`

`users?name={name} GET`

`users?email={email} GET`

`users/:id GET | PATCH | DELETE`

`users/:id/recipes GET | POST`

`users/:id/restrictions GET | POST`

`users/:id/restrictions/:id GET | DELETE`

`users/:id/alternatives GET`

<br>
<br>

`ingredients/ GET | POST`

`ingredients/:id GET | PATCH | DELETE`

`ingredients?name={name} GET`

`ingredients/:id/alternatives GET | POST`

`ingredients/:id/alternatives/:id GET | DELETE`

<br>
<br>

`recipes/ GET | POST`

`recipes/:id/ GET | PATCH | DELETE`

```javascript
fetch("url/recipes/8")
.then((res) => {
  let data = res.json();
  return data;
})
.then((recipeJSON) => {
  ///do something with your JSON
})
```

Error Code | Description
---------- | -------------
1 | The start date is after end date.
2 | The start date is before the current date.

## Notes

The `GET users` request can be used with the *group* query parameter to filter to a group. See the [users](../users/) resource page.
