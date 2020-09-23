$(() => {
  let list = $("#ulid");
  let page = 1;

  $("#btnid").click(() => {
    //$.get() make a async get request means ajax to fetch data
    $.get(`https://reqres.in/api/users?page=${page}`, (data) => {
      page++;
      for (let p of data.data) {
        list.append(
          $(`<li>
                <img width = "100" src="${p.avatar}">
                ${p.first_name} ${p.last_name}
                </li>`)
        );
      }
    });
  });
});
