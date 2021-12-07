import React, { Component } from "react";

export default class service extends Component {
  render() {
    const { data } = this.props;
    const pillars = [
        {
            node: {
                description: {
                    childMarkdownRemark: {
                        html: `<p>Learning is the first pillar that you would need to follow in order to start a Web Development journey, 
                        or to get better at it. It should be a foundamental habit for every developer because learning new skills is something 
                        that we should do every week, since we owe it to owerselves. MasterYourWeb's mission is to provide good quality materials 
                        that will support your learning process, so that both you and us will become better and better with each day.</p>`
                    }
                },
                title: 'Learn'
            }
        },
        {
            node: {
                description: {
                    childMarkdownRemark: {
                        html: `<p>Steping into our 2nd pillar already requires a big amount of effort, because you have probably 
                        started learning theoretical aspects about Web Development. But building websites takes time and practice, 
                        which is being done via building actual software, not just learning theory. In most of our tutorials, 
                        we will be focusing on providing good examples and also exercises that you could follow along with us, 
                        in order to sharpen your skills.</p>`
                    }
                },
                title: 'Build'
            }
        },
        {
            node: {
                description: {
                    childMarkdownRemark: {
                        html: `<p>Once you have put in the effort to learn something new, you have built some applications, 
                        you will notice that you will start to master your craft and you will become REALLY GOOD at that.
                         We really hope that you have enjoyed the process of masterning a new technology so far and we 
                         would like to say that this is just the beginning, because with each Conquer, 
                         there are more things to DO, TO BUILD, and in the end, to CONQUER.</p>`
                    }
                },
                title: 'Conquer'
            }
        }
    ]
    return (
      <div className="service section" id="Pillars">
        <div className="container">
          <div className="section-head">
            <h2>Pillars</h2>
          </div>
          <div className="row">
            {pillars.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
