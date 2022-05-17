export function posts (doc, impriPost) {
    impriPost.innerHTML = "";
    doc.forEach((doc) => {
      impriPost.innerHTML += `
      <div>
        <h3 class="titlePost"> ${doc.data().title}</h3>
        <p class="bodyPost">${doc.data().post}</p>
    </div>`;
    });
}