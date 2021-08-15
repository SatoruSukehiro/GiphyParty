console.log("Let's get this party started!");



// set page querey variables 
const $searchBtn = $('#search');
const $removeBtn = $('#remove');
const $searchValue = $('#search-value')
const $gifContainer = $('#gif-container')
//

// on the submit button you will run a get request to search for the searched content BIG NOTICE ON how jquery is a lifesaver here.
$searchBtn.on('submit',async function(evt){
    evt.preventDefault();
   let response = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{
        
        q: $searchValue.val(),
        // many api's willl make me create an api key to use. get comfortable with doing this frequently. 
        api_key: '8kEc01rIod79eLx5zXDcwarNtpW3GQqO',
    }})
    postGif(response)
})

// this function was created and then pulled into the click. this handles what to do with the response data in order to create your actual gif and posts it to the page. 
function postGif(response){
    const gifs = response.data.data;
    let random = Math.floor(Math.random()* gifs.length)
    let randomGif = gifs[random];
   
    //
    let createdGif = $('<img>').attr({
        'id' : 'gif',
        'src': randomGif.images.original.url,
        }).css({"padding": "1rem",
            "height" : "20%",
            'width' : '20%'
        })

    $gifContainer.append(createdGif)
    
}

// create remove click
$('#remove').on('click',function(){
    $gifContainer.empty()
    
    
})