const posts = [
    {id:1,desc:'Sabah'},
    {id:2,desc:'Öğle'},
    {id:3,desc:'Akşam'}
]


const listPosts = () =>{
    posts.map((post)=>{
        console.log(post)
    })
}

const addNewPost = (post,callback) => {
     posts.push(post);
     callback();
}

addNewPost({id:4,desc:'Gece'},listPosts);