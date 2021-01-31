import './App.css';

function Aspp() {
    const dimensions = {
        x: '800',
        y: '716',
        z: '500',
    };
    dimensions.model = {
        width: `${dimensions.x}px`,
        height: `${dimensions.y}px`,
    }
    dimensions.wall = {
        width: `${dimensions.z}px`,
        height: `${dimensions.y}px`,
    }
    dimensions.capture = {
        width: `${dimensions.x}px`,
        height: `${dimensions.z}px`,
    }
    const style = {

        model3d: {
            transform: 'rotateX(-20deg) rotateY(-20deg)',
            transition: 'all 1s ease-in-out'
        },
        furniture:{
            width: `${dimensions.x}px`,
            height: `${dimensions.y}px`,
            transform: 'scale3d(0.4, 0.4, 0.4) translate3d(-400px, 200px, -150px)'
        },
        group:{
            door: {
                display: 'none',
                transform: 'translateZ(300px)'
            },
            door_handle: {
                width: '10px',
                height: '100px',
                backgroundColor: 'red',
                transform: 'translate3d(200px,350px,30px)',
             // left: '200px;',
             // top: '350px',
            border: '1px solid'
            },

            sidewall:{
                left:{
                    ...dimensions.wall,
                    transform: `translate3d(9px, 0px, ${dimensions.z}px) rotateX(0deg) rotateY(90deg)`
                },
                right:{
                    ...dimensions.wall,
                    transform: `translate3d(${dimensions.x}px, 0px, ${dimensions.z}px) rotateX(0deg) rotateY(90deg)`
                },
                back: {
                    ...dimensions.model,
                    transform: `translate3d(18px, 8px, 19px) rotateX(0deg) rotateY(0deg)`
                },
                front: {
                    right: {
                        position: 'absolute'
                    }
                },
                capture: {
                    top: {
                        ...dimensions.capture,
                        transform: `translate3d(18px, 9px, 20px) rotateX(90deg) rotateY(0deg)`
                    },
                    bottom: {
                        ...dimensions.capture,
                        transform: 'translate3d(18px, 707px, 0px) rotateX(90deg) rotateY(0deg)'
                    }
                }
            },
            shelves: {
                display: 'none'
            }
        }
    }
  return (
      <div>
          <nav></nav>
          <div  id="model3d" title="scene3d" style={style.model3d}>
              <div id="furniture" className="furniture" style={style.furniture}>
                  <div id="grupa-drzwi" className="f_front lt-front"
                       style={style.group.door}>
                      <div id="formatka-front-L" className="formatka front one" data-open="false" title="front Lewy">
                          <figure className="klamka" style={style.group.door_handle}></figure>
                      </div>
                      <div id="formatka-front-P" className="formatka front two" data-open="false " title="front Prawy"
                           style={style.group.sidewall.front.right}>
                          <figure className="klamka" style={style.group.door_handle}></figure>
                      </div>
                  </div>
                  <div id="formatka-bok-l"
                       className="formatka korpus"
                       title="Bok Lewy"
                       style={{...style.group.sidewall.left, ...style.dimensions}}
                  ></div>
                  <div id="formatka-bok-p" className="formatka korpus" title="Bok Prawy" style={style.group.sidewall.right}></div>

                  <div className="grupa plecy_g lt-back" rel="plecy_g">
                      <div id="formatka-plecy" className="formatka plecy" title="Plecy" style={style.group.sidewall.back} ></div>
                  </div>
                  <div id="grupa-wieniec">
                      <div id="formatka-wieniec-dolny" className="formatka korpus wieniec" title="Wieniec dolny"
                           style={style.group.sidewall.capture.bottom}></div>
                      <div id="formatka-wieniec-gorny" className="formatka korpus wieniec" title="Wieniec górny"
                           style={style.group.sidewall.capture.top}></div>
                  </div>
                  <div id="grupa-polka" style={style.group.shelves}>
                      <div id="formatka-polka-0" className="formatka korpus polka" title="Półka 1"></div>
                      <div id="formatka-polka-1" className="formatka korpus polka" title="Półka 2"></div>
                      <div id="formatka-polka-2" className="formatka korpus polka" title="Półka 3"></div>
                      <div id="formatka-polka-3" className="formatka korpus polka" title="Półka 4"></div>
                      <div id="formatka-polka-4" className="formatka korpus polka" title="Półka 5"></div>
                      <div id="formatka-polka-5" className="formatka korpus polka" title="Półka 6"></div>

                  </div>
              </div>

          </div>

      </div>
  );
}

export default Aspp;
