console.log("test");
$(async function(){
    console.log("jQuery is running");
    const cupcakeList = $('#cupcake-list');
    const URL = "http://127.0.0.1:5000/";
    let response = await axios.get(`/api/cupcakes`)
    console.log(response);
    for (let i = 0; i < response.data.cupcakes.length; i++){
        let newCupcake = generateCupcakeHTML(response.data.cupcakes[i]);
        cupcakeList.append(newCupcake);
    };

    $('#new-cupcake-form').on("submit", async function(e){
        e.preventDefault();

    })

    function generateCupcakeHTML(cupcake){
        const cupcakeHTML = $(`<li><a href="/api/cupcakes/${cupcake.id}"><img src= ${cupcake.image} alt=""></a></li>`)
        return cupcakeHTML
    }; 
})