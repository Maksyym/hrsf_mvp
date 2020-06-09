import React, { useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import SurveyModal from "./SurveyModal.jsx";

const surveyData = [
  [{
    pic: "https://cdn.shopify.com/s/files/1/0301/5793/articles/42720061_l_2048x2048.jpg?v=1506533409",
    header: "I bike to commute",
    description: "It's just part of doing business, baby. My workday starts and ends with a ride, and I would do unspeakable things if I had to sit in car traffic."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTphk7owDIeQS-GRup_DwlieTHwWJD1vK3NDwavZE_PXCqnIQNA&usqp=CAU",
    header: "I bike for fun and leisure",
    description: "It's all about the journey, not the destination. If you ain't cruisin', you losin'."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfWLhhShoTPXYZglIuSedQPSEdj-6YyYcjUhfJNus1U1nsqtJ7&usqp=CAU",
    header: "I bike for exercise/competitively",
    description: "Nothing brings me pleasure like shredding my glutes and quads for an hour powering up the steepest hill I can find just so I can bomb it downhill at 45 mph."
  }],

  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyZ4mmDn53Ei9kRUOqXICFqKp6i2_1YBn1dd9Vmp3m1LjGCvst&usqp=CAU",
    header: "Solo rider",
    description: "Jason Derulo said it best: I'm feeling like a star, you can't stop my shine, I'm loving cloud nine, my head's in the sky I'm solo, I'm ridin' solo, I'm ridin' solo, I'm ridin' solo, solo."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJrA0bzT5kNhUc4F-gGU_J6YeDVbSvoE8mCYxmrSXeOl3HNtxm&usqp=CAU",
    header: "Group rider",
    description: "I'm a pack animal. Cycling is a social activity when done right."
  }],

  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk2BkDooHE6biSebyosEfQPfpiZrJoVwP0WPNNwnjpaDTg56sm&usqp=CAU",
    header: "Asphalt",
    description: "I'm a road warrior, and I like a solid, grippy surface under my rubber."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW5ouxf9SEOBFal08rzVaCpu9I5XNAcv7TeC_LFfCAykCUC3w7&usqp=CAU",
    header: "Dirt/Trail",
    description: "Roads bore me. Catch me on Mt. Tam making a hiking trail my personal paradise"
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGigX2lKrnn4DtdMfdCBtx3vOSxmO28xExCCjhfYctFINO0NB9&usqp=CAU",
    header: "Sand/Gravel/BMX track",
    description: "I'm one of two extremes; Either I'm a hardcore beachbum or a hardcore BMXer... por qué no los dos?"
  }],

  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4oWii7G-dZvXLfwSFRrZjcgXo-kD27VbK1XwEsXXLLKBBqPn-&usqp=CAU",
    header: "Carbon fiber",
    description: "Pricey, lightweight, flexible, and aerodynamic. Great for high end bikes, especially racebikes."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA_wno86RR3RwTkRj24iMkENp2jzylbAgmrDUWrC7aTW__rRC_&usqp=CAU",
    header: "Aluminum",
    description: "Affordable, light, good strength-weight ratio, well-rounded material for bikes of any type."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXuJVFAg7zTLBrsYSHMBKhQUN3d_99u1WbaHejvEQqjjI6OSnS&usqp=CAU",
    header: "Titanium",
    description: "Pricey, best strength-weight ratio of all metals, performance-oriented, highly durable. Good for roadbikes, great for mountain bikes AND racebikes."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsbYXK3_5InRr5AsFCyfT01_7LI_fhBmM5DvAjg3-sIVkuCZZn&usqp=CAU",
    header: "Steel",
    description: "Affordable, heavier, less durable. Where it loses out in weight and cost, it gains in comfort. Great for roadbikes."
  }],

  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCRzUxTdTO3LeBrx111Ca2qDCcFXFpiHDkksxYGQkIHRxV5pXq&usqp=CAU",
    header: "Rim brakes",
    description: "Standard issue. Light weight, cost-efficient, aerodynamic, and highly maintainable, it's no wonder these are industry standard."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZT--jVFxTcV7_1O-KvRLGstAYcEpHDEnLJrxz3lYkA0WHiKMG&usqp=CAU",
    header: "Disk brakes",
    description: "When one needs a little extra stopping power, these are the obvious choice. Expensive, slighly heavier, but significantly more powerful and less prone to brake failure."
  }],

  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiI4uqy1voxj1N1KbMD9hw5kkJjjep-CqLBG93DnYcSCrZhABO&usqp=CAU",
    header: "Mechanical",
    description: "I value autonomy over everything else. Therefore it's up to me and me alone to conquer the road ahead, help be damned. No one got a nice butt by letting the bike do the biking, ya know?"
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE61GfJqF-mTFGzkVmGPmFkWdONsPYNf-YwuzgIEo_myJuzBel&usqp=CAU",
    header: "Electric-assist",
    description: "The world is a harsh, cruel place. Why make it more cruel than it has to be? Let an electric motor assist me in my literal uphill battles... and I'd be lying if I said I did not enjoy overtaking professional cyclists while not breaking a sweat"
  }],
// sports cars --> moving truck for photos
  [{
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1x0YE13Dt-Z1yhjdCyx9X79c-YDyKLjkPjwvoYhj1cXVcpPV2&usqp=CAU",
    header: "Sporty",
    description: "When I'm ridin', it's just me and my trusty waterbottle vs. the world. No cargo space required!"
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ23ZiAbqJO7wUS7M0Iihq-g_yNDHyDZqZj7cVCQ1VM-ohesJxt&usqp=CAU",
    header: "Practical",
    description: "I often find a need for a little storage space. The three bottles of wine I need to bring to the picnic aren't going to hold themselves."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7sYk0dBIjPeiX_VdsrnfDOab3Y7_pjHrE4vD9iRsOR94GwTe0&usqp=CAU",
    header: "Prepared",
    description: "Well equipped to handle any challenge, a series of storage units on my bike allows me to bring any and all things I need to conquer the day."
  },
  {
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTQ6HLTIzRpBNUvAYbacekDE280K4SjyvGfBU_DQ_UlTwVHtHv&usqp=CAU",
    header: "Big-rig",
    description: "I need maximum storage capacity because I need to transport a full campsite on my bike when I go camping."
  }

],

];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <ModalProvider>
          <div className="App">
            <h2>Click this bad boy to get started:</h2>
            <SurveyModal surveyData={surveyData}/>
          </div>
        </ModalProvider>
      </div>
    )
  }
}

export default App;