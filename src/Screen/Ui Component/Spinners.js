import React from "react";
import BorderSpinner from '../../Component/Ui Component/BorderSpinner'
import ButtonsSpinner from "../../Component/Ui Component/ButtonsSpinner";
import GrowingSpinner from "../../Component/Ui Component/GrowingSpinner";
import SizeSpinner from "../../Component/Ui Component/SizeSpinner";


function SpinnersUI (props) {
    
    return( 
        <div className="container">
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <h2 id="about">About</h2>
                    <p>Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.</p>
                    <p>For accessibility purposes, each loader here includes <code>role="status"</code> and a nested <code>&lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;</code>.</p>
                    <div className="card card-callout p-3">
                        <span>The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</span>
                    </div>
                    <BorderSpinner />
                    <GrowingSpinner />
                    <SizeSpinner />
                    <ButtonsSpinner />

                </div>
            </div>
        </div>
    )
  }

  
export default SpinnersUI;