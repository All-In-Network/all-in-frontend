import React from "react";
import BasicToast from "../../Component/Ui Component/BasicToast";
import CustomToast from "../../Component/Ui Component/CustomToast";
import StackingToast from "../../Component/Ui Component/StaticModal";
import TranslucentToast from "../../Component/Ui Component/TranslucentToast";
import PlacementTost from "../../Component/Ui Component/PlacementTost";
import AccessibilityToast from "../../Component/Ui Component/AccessibilityToast";


function ToastsUI (props) {
    
    return( 
        <div className="container">
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>
                    <h2 id="overview">Overview</h2>
                    <p>Things to know when using the toast plugin:</p>
                    <ul>
                        <li>Toasts are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
                        <li><strong>Please note that you are responsible for positioning toasts.</strong></li>
                        <li>Toasts will automatically hide if you do not specify <code>autohide: false</code>.</li>
                    </ul>
                    <div className="card card-callout p-3">
                        <span>The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</span>
                    </div>
                    <BasicToast />
                    <TranslucentToast />
                    <StackingToast />
                    <CustomToast />
                    <PlacementTost />
                    <AccessibilityToast />

                </div>
            </div>
        </div>
    )
  }

  
export default ToastsUI;