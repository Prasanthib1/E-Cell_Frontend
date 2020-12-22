import React from 'react';
import './Project.css';
import {Link} from 'react-router-dom';
import Info from './Info';
import Info1 from './Info1';
import img10 from './p.jpg';
function Project() {
    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">PROJECTS</h1>
                <h1 className="pp2" >2019-20</h1>
            </div>
            <div className="p_info">
<Info 
    image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-12-at-4.44.45-PM.jpeg"
    name="ANN Power Optimization"
    desc="Project on the concepts of EVs, Simulation and Artificial Intelligence called “ANN Power Optimization”. The project dealt with modeling and simulating various EV Models and optimizing them with the basics of Machine learning and Data sciences"
/>
<Info1 
    image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-12-at-6.38.46-PM.jpeg"
    name="Li-ion Battery pack thermal model"
    desc="To model and analyze the temperature distribution of a 12S12P 18650 Li-ion
cell in a square array with 1mm spacing using COMSOL along with the
cooling analysis and a thermal model."
/>
<Info 
    image="https://pulsenitk.in/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-13-at-1.37.13-PM.jpeg"
    name="Disc Brake – Design and Analysis"
    desc="Project on Disc Brake – Design and Analysis where modeling on SolidWorks together with thermomechanical analysis on Ansys with static structural and steady-state thermal modules was done. The gradients of stress, deformation, temperature, and rate of heat transfer were generated accordingly."
/>
<Info1 
    image={img10}
    name="SAE NITK Media Works"
    desc="SAE-NITK Media has been actively involved in the clubs creative face and planned and executed all our schemes,mainly SAE-NITK Tech Buzz Annual Magazine SAE Tech Chronicle - A Weekly Blog Series."
/>

<h1 className="pp2" >2020-21</h1>
<Info 
    image="https://www.alentecinc.com/images/Flue_Gas_Conditioning_CFD_Modeling_ESP_WET_Multistage_Collector.jpg"
    name="CFD Analysis of Various NOSE Profiles of Nozzle"
    desc="To identify the types of nose
profiles and its specific aerodynamic
characteristics with minimum pressure coefficient
and critical Mach number."
/>
<Info1 
    image="https://s8096.pcdn.co/wp-content/uploads/2015/01/Energy-Storing-Body-Panels.jpg"
    name="Energy Storing Body Panels"
    desc="To study how the power is stored in panels,
do reasearch on theenergy storing body panel,how to improve storage capacity of panels,analysis and power storing capacity of panel."

/>
<Info 
    image="https://www.motor-works.com/Files/Images/Blog/abs.jpg"
    name="Anti - Lock Brake System"
    desc="As the name signifies, the anti-lock braking system is a safety system in cars and other automobiles that keeps their wheels from locking up and helps their drivers to maintain steering control. Also referred to as anti-skid braking system sometimes, it enables the wheels of a vehicle to maintain tractive contact with the ground so that they don’t  go into an uncontrolled skid."
/>
<Info1 
    image="https://www.saabplanet.com/wp-content/uploads/saab-reaxs.jpg"
    name="Rear Wheel Steering"
    desc="At low speeds rear wheel turns the opposite direction to the front wheels to decrease
turning radius which is very important for modern day cars as cities are getting more
and more crowded

At high speeds rear wheel turns the same direction as the front wheels to increase
turning stability"
/>
<Info 
    image="https://instrumentationtools.com/wp-content/uploads/2019/08/PID-Controller-Example.jpg"
    name="Fluid flow control using PID Controllers"
    desc="A PID controller is utilized in order to control the flow rate of the heavy oil in
pipelines by controlling the vibration in a motor pump. A torsional actuator is
placed on the motor pump in order to control the vibration on a motor and
consequently controlling the flow rates in pipelines."
/>
<Info1 
    image="https://www.washingtonpost.com/wp-srv/special/metro/urban-jungle/images/roboseed.jpg"
    name="Aerodynamic analysis of helicopter seed"
    desc="The maple samara (winged-seed) auto-gyrates as it falls. The spiral motion
appears to be stable against wind disturbance and is insensitive to the initial
conditions. The auto-gyration is a characteristic of many long-dispersal tree
seeds . As the samara glides along a helical path, it generates an aerodynamic
force that slows down its descent. The slower descent leads to a longer
dispersion under the wind condition."
/>
<Info 
    image="https://i.ytimg.com/vi/L_svDxEweZg/maxresdefault.jpg"
    name="CFD analysis
of supercavitating
flow"
    desc="Project on the concepts of EVs, Simulation and Artificial Intelligence called “ANN Power Optimization”. The project dealt with modeling and simulating various EV Models and optimizing them with the basics of Machine learning and Data sciences"
/>

            </div>

        </div>
    )
}

export default Project
