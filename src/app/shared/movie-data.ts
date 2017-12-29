import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

/**
 * Used for creating http object.
 * Two parameter of by MockBackend and BaseRequestOptions are passed.
 * An Http object is returned.
 */
export function movieDataFactory( backend: MockBackend,  options: BaseRequestOptions) {

    /**
     * Used to hold the database for our app.
     */
    var moviesDatabase = new Array();
    moviesDatabase[0] = {
        id:1,
        title: 'Kingsman: The Golden Circle',
        description: "When thieir headquarters are destroyed and the world is held hostage, the Kingsman's jounery leads them to the discovery of an allied spy organiztion in the US. These two elite secret organizations must band together to defeat a common enemy.",
        director: 'Matthew Vaughn',
        production: 'Marv Films',
        release: '20 September 2017',
        musicDirector: ['Henry Jackman','Matthew Margeson'],
        gener: ['Comedy |', 'Action |', 'Adventure'],
        bannerImage:'assets/images/kingsman-banner.jpg',
        posterImage:'assets/images/kingsman-poster.jpg',
        latest: true,
        rating: 4.7
    };

    moviesDatabase[1] = {
        id:2,
        title: 'Newton',
        description: "A government clerk on election duty in the conflict ridden jungle of Central India tries his best to conduct free and fair voting despite the apathy of security forces and the looming fear of guerrilla attacks by communist rebels.",
        director: 'Amit V Masurkar',
        production: 'Drishyam Films',
        release: '22 September 2017',
        musicDirector: ['Naren Chandavarkar','Rachita Arora'],
        gener: ['Drama |', 'Comedy'],
        bannerImage:'assets/images/newton-banner.jpg',
        posterImage:'assets/images/newton-poster.jpg',
        latest: true,
        rating: 4
    };

    moviesDatabase[2] = {
        id:3,
        title: 'The Avengers',
        description: "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sixth film in the Marvel Cinematic Universe.",
        director: 'Joss Whedon',
        production: 'Marvel Studios',
        release: '11 April 2012',
        musicDirector: ['Alan Silvestri'],
        gener: ['Fantasy |', 'Sci-Fi'],
        bannerImage:'assets/images/the_avengers_banner.jpg',
        posterImage:'assets/images/the_avengers_poster.jpg',
        latest: true,
        rating: 3.7
    };

    moviesDatabase[3] = {
        id:4,
        title: 'Tiger Zinda Hai',
        description: "East Indian agent Tiger joins forces with Pakistani agent Zoya to battle a ruthless militant.",
        director: 'Ali Abbas Zafar',
        production: 'Yash Raj Films',
        release: '22 December 2017',
        musicDirector: ['Vishal–Shekhar',' Julius Packiam'],
        gener: ['Thriller |', 'Action'],
        bannerImage:'assets/images/tiger-zinda-hai-banner.jpg',
        posterImage:'assets/images/tiger-zinda-hai-poster.jpg',
        latest: true,
        rating: 3.5
    };

    moviesDatabase[4] = {
        id:5,
        title: 'Thor Ragnarock',
        description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
        director: 'Taika Waititi',
        production: 'Marvel Studios',
        release: '10 October 2017',
        musicDirector: ['Mark Mothersbaugh'],
        gener: ['Fantasy |', 'Sci-Fi'],
        bannerImage:'assets/images/thor-banner.jpg',
        posterImage:'assets/images/thor-poster.jpg',
        latest: true,
        rating: 4.6
    };

    moviesDatabase[5] = {
        id:6,
        title: 'X-Men: Days of Future Past',
        description: "Wolverine travels back in time to stop Mystique from assassinating Bolivar Trask, whose death leads to the creation of the Sentinels, which are robots designed to kill mutants..",
        director: 'Bryan Singer',
        production: 'Marv Films',
        release: '23 May 2014',
        musicDirector: ['Henry Jackman','Matthew Margeson'],
        gener: ['Fantasy |', 'Thriller'],
        bannerImage:'assets/images/x-men-banner.jpg',
        posterImage:'assets/images/xmen-poster.jpg',
        latest: false,
        rating: 4.2
    };

    moviesDatabase[6] = {
        id:7,
        title: 'Movie 7',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive7-banner.jpg',
        posterImage:'assets/images/movie7-poster.jpg',
        latest: false,
        rating: 4.1
    };

    moviesDatabase[7] = {
        id:8,
        title: 'Movie 8',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie8-banner.jpg',
        posterImage:'assets/images/movie8-poster.jpg',
        latest: false,
        rating: 3.5
    };

    moviesDatabase[8] = {
        id:9,
        title: 'Movie 9',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie9-banner.jpg',
        posterImage:'assets/images/movie9-poster.jpg',
        latest: false,
        rating: 3.6
    };

    moviesDatabase[9] = {
        id:10,
        title: 'Movie 10',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive10-banner.jpg',
        posterImage:'assets/images/movie10-poster.jpg',
        latest: false,
        rating: 3.7
    };

    moviesDatabase[10] = {
        id:11,
        title: 'Movie 11',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive11-banner.jpg',
        posterImage:'assets/images/movie11-poster.jpg',
        latest: false,
        rating: 3.8
    };

    moviesDatabase[11] = {
        id:12,
        title: 'Movie 12',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie12-banner.jpg',
        posterImage:'assets/images/movie12-poster.jpg',
        latest: false,
        rating: 3.9
    };

    moviesDatabase[12] = {
        id:13,
        title: 'Movie 9',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie13-banner.jpg',
        posterImage:'assets/images/movie13-poster.jpg',
        latest: false,
        rating: 4
    };

    moviesDatabase[13] = {
        id:14,
        title: 'Movie 14',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive14-banner.jpg',
        posterImage:'assets/images/movie14-poster.jpg',
        latest: false,
        rating: 1.2
    };

    moviesDatabase[14] = {
        id:15,
        title: 'Movie 15',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive15-banner.jpg',
        posterImage:'assets/images/movie15-poster.jpg',
        latest: false,
        rating: 4.5
    };

    moviesDatabase[15] = {
        id:16,
        title: 'Movie 16',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie16-banner.jpg',
        posterImage:'assets/images/movie16-poster.jpg',
        latest: false,
        rating: 4.5
    };

    moviesDatabase[16] = {
        id:17,
        title: 'Movie 17',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/movie17-banner.jpg',
        posterImage:'assets/images/movie17-poster.jpg',
        latest: false,
        rating: 3.5
    };

    moviesDatabase[17] = {
        id:18,
        title: 'Movie 18',
        description: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
        director: 'Patty Jenkins',
        gener: ['Adventure', 'Sci-Fi', 'War', 'Action'],
        bannerImage:'assets/images/moive18-banner.jpg',
        posterImage:'assets/images/movie18-poster.jpg',
        latest: false,
        rating: 3.5
    };


  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      //
      // Fake implementation of /movies
      //
      if (connection.request.url.endsWith('/movies') &&  connection.request.method === RequestMethod.Get) {
            connection.mockRespond(
                new Response(
                    new ResponseOptions({
                        status: 200,
                        body: { data: moviesDatabase }
                    })
                )
            );
        }else if (connection.request.url.match(new RegExp('/movies/+')) && connection.request.method === RequestMethod.Get){
            
            let id = parseInt(connection.request.url.replace('/movies/',''));
            connection.mockRespond(
                new Response(
                    new ResponseOptions({
                        status: 200,
                        body: { data: moviesDatabase[id-1] }
                    })
                )
            );
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      },1);
  });

  return new Http(backend, options);
}

export let movieDataProvider = {
    provide: Http,
    useFactory: movieDataFactory,
    deps: [MockBackend, BaseRequestOptions]
};