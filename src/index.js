import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/header';
// import Directory from './components/Directory/directory';
// import InfoPanels from './components/InfoPanels';

// import { TweenMax, TweenLite, TimelineLite } from "gsap/TweenMax";
import $ from "jquery";
// import CustomScroll from './components/utilities/customScroll';
import Timeline from './components/utilities/Timeline';

import Catalog from './friends.json';
import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "daniel",
      timeline: null,
      timelineDuration: 0,
      timelineTime: 0,
      controllers: {}
    }

    // this.t1 = new TimelineLite();
    // this.element = null;

    this.container_1 = $(".background .cover-image .container-1");
    this.background_1 = $(".background .cover-image .container-1 .background-1");
    this.container_2 = $(".background .cover-image .container-2");
    this.background_2 = $(".background .cover-image .container-2 .background-2");
    this.container_3 = $(".background .cover-image .container-3");
    this.background_3 = $(".background .cover-image .container-3 .background-3");
    this.container_4 = $(".background .cover-image .container-4");
    this.background_4 = $(".background .cover-image .container-4 .background-4");
    this.container_5 = $(".background .cover-image .container-5");
    this.background_5 = $(".background .cover-image .container-5 .background-5");
    this.container_6 = $(".background .cover-image .container-6");
    this.background_6 = $(".background .cover-image .container-6 .background-6");
    this.container_7 = $(".background .cover-image .container-7");
    this.background_7 = $(".background .cover-image .container-7 .background-7");
    this.container_8 = $(".background .cover-image .container-8");
    this.background_8 = $(".background .cover-image .container-8 .background-8");
    this.text_1 = $(".background .cover-text .container-1");
    this.text_2 = $(".background .cover-text .container-2");
    this.text_3 = $(".background .cover-text .container-3");
    this.text_4 = $(".background .cover-text .container-4");
    this.text = $(".text");
    this.list = $(".list");
  }

  componentWillMount(){
    {console.log("timeline",Timeline)};
    {console.log("getInstance",Timeline.getInstance)}
    // Timeline()
    
    // this.scroll = new CustomScroll(0,this.timeline.duration()),
    // $(this.scroll).bind(
    //   CustomScroll.EVENT.MOVE,
    //   this.general_SCROLL.bind(this)
    // ),
    // general_SCROLL = (e) => {
    //   // this.controllers.home.setScrollPosition(e.target.scroll),
    //   this.timeline.get().time(e.target.scroll)
    // }
  }

  componentDidMount(){
    // this.state.timeline = Timeline.getInstance(),
    // {console.log("Hello")}
  }

  // componentWillMount = () => {
  //   let sorted = props.friends.map(item => {
  //     return (item.name)
  //   }).sort()
  //   this.setState({ persons: sorted })
  // }

  renderDisplay = () => (
    <div className="app">


      <section className="home">
        <Header/>

        <div ref={div => this.myElement = div}>
          Hello Hello friend. Whats up
        </div>


        <p ref={p => this.element = p}>
          Isn't this just wonderful
        </p>

      </section>

      <section className="project">
        
        <div className="background">

          <div className="cover-image">
            <div className="container container-2">
            </div>

            <div className="container container-4">
              <div className="background background-4">
              </div>
            </div>

            <div className="container container-6">
              <div className="background background-6">
              </div>
            </div>
          </div>

          <div className="cover-image">

            <div className="container container-1">
              <div className="background background-1">
              </div>
            </div>

            <div className="container container-3">
              <div className="background background-3">
              </div>
            </div>

            <div className="container container-5">
              <div className="background background-5">
              </div>
            </div>
          </div>

          <div className="cover-text">

            <div className="container container-1">
              <div className="title">
                <div className="text-underline">
                  
                  <div className="content">
                    <p> Skills Make the Man</p>
                  </div>
                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>

                </div>
              </div>

              <div className="description">
                <p> Agora, você pode imprimir por comando de voz, via mobile e desktop. Você dita, a impressora HP imprime em tempo real. Unindo a HP Ink Advantage Ultra com uma API de reconhecimento de voz, criamos uma ferramenta capaz de imprimir historias contadas, instantaneamente. Durante o projeto, configuramos a ferramenta para que os relatos fossem impressos na diagramação exata das páginas do livro. Nossos autores mais urbanos contaram suas histórias de vida usando o APP Magic Words no celular, enquanto outros usaram um microfone comum e a ferramenta no desktop.
                </p>  
              </div>
            </div>

            <div className="container container-2">
              <div className="title">
                <div className="text-underline">
                  
                  <div className="content">
                    <p> Skills Make the Man</p>
                  </div>
                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>

                </div>
              </div>

              <div className="description">
                <p> Agora, você pode imprimir por comando de voz, via mobile e desktop. Você dita, a impressora HP imprime em tempo real. Unindo a HP Ink Advantage Ultra com uma API de reconhecimento de voz, criamos uma ferramenta capaz de imprimir historias contadas, instantaneamente. Durante o projeto, configuramos a ferramenta para que os relatos fossem impressos na diagramação exata das páginas do livro. Nossos autores mais urbanos contaram suas histórias de vida usando o APP Magic Words no celular, enquanto outros usaram um microfone comum e a ferramenta no desktop.
                </p>  
              </div>
            </div>

            <div className="container container-3">
              <div className="title">
                <div className="text-underline">
                  
                  <div className="content">
                    <p> Skills Make the Man</p>
                  </div>
                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>

                </div>
              </div>

              <div className="description">
                <p> Agora, você pode imprimir por comando de voz, via mobile e desktop. Você dita, a impressora HP imprime em tempo real. Unindo a HP Ink Advantage Ultra com uma API de reconhecimento de voz, criamos uma ferramenta capaz de imprimir historias contadas, instantaneamente. Durante o projeto, configuramos a ferramenta para que os relatos fossem impressos na diagramação exata das páginas do livro. Nossos autores mais urbanos contaram suas histórias de vida usando o APP Magic Words no celular, enquanto outros usaram um microfone comum e a ferramenta no desktop.
                </p>  
              </div>
            </div>
          </div>

        </div>

        <div className="text">

          <div className="highlight">
            <div className="text-underline">

              <div className="content">
                <p>Conheça o</p>
              </div>

              <div className="underline">
                <div className="background-underline">
                </div>
              </div>

            </div>
          </div>

          <div className="title">
            <p>
              <span>Proje</span>
              <span>to</span>
            </p>
          </div>

          <div className="line-horizontal">
          </div>
        </div>

        <div className="list">
          <ul>
            <li data-page="technology">

              <div className="bullet">
              </div>

              <div className="line">
                <div className="line-background">
                </div>
              </div>

              <div className="icon" >
                <div className="image">
                </div>
              </div>

              <div className="title">
                <div className="text-underline">
                  <div className="content">
                    <p>Imprima por voz</p>
                  </div>

                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>
                </div>
              </div>

            </li>

            <li data-page="documentary">

              <div className="bullet">
              </div>

              <div className="line">
                <div className="line-background">
                </div>
              </div>

              <div className="icon">
                <div className="image">
                </div>
              </div>

              <div className="title">
                <div className="text-underline">
                  <div className="content">
                    <p>O documentário</p>
                  </div>
                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>
                </div>
              </div>

            </li>

            <li data-page="book">

              <div className="bullet">
              </div>

              <div className="line">
                <div className="line-background">
                </div>
              </div>

              <div className="icon">
                <div className="image">
                </div>
              </div>

              <div className="title">
                <div className="text-underline">
                  <div className="content">
                    <p>O livro</p>
                  </div>
                  <div className="underline">
                    <div className="background-underline">
                    </div>
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>
      
      </section>

      <section className="page three">
      </section>

    </div>
  )

  render() {

    return (
      <div>
        <Timeline/>
        {this.renderDisplay()}
      </div>
    )




    // return (
    //   <div className="page">
    //   	<Header/>

    //   	<div className="wrapper">
    //   		<Directory data={this.state.persons}/>
    //   		<InfoPanels/>
    //   	</div>

    //   </div>
    // );


  }
}

ReactDOM.render(<App />, document.getElementById('root'));
