import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/header';
// import Directory from './components/Directory/directory';
// import InfoPanels from './components/InfoPanels';

import { TweenMax, TweenLite, TimelineLite } from "gsap/TweenMax";

import Catalog from './friends.json';
import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount(){
    this.myTween = TweenLite.to(this.myElement, 1, {x:300, y:300});
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
