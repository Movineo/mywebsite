const image = document.querySelector('img')
input= document.querySelector('input');

input= addEventListener ('change',()=>{
    img.src = URL.createObjectURL(input.file[0]);});
;
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const data = {
    name,
    email,
    message
  };
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

console.log("first");
const goToTopBtn = document.getElementById("go-to-top-button");
console.log(goToTopBtn);

window.onscroll = ()=>{
  scrollFunction();
};
function scrollFunction() {
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      goToTopBtn.style.display= "block";
    }
  else{
      goToTopBtn.style.display= "none";
    }
  }


goToTopBtn.onclick= () => {
  goToTopBtn.style.display ="none";
  window.scroll({
    top: 0, behavior: "smooth",
  });
};
