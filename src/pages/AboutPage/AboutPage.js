import React from "react";

import "./AboutPage.css"
import "../GeneralStyle.css";

import NavBar from '../../components/NavBar/NavBar';
import keen from "../../assets/Keen-532.png";

function AboutPage() {
  


  return (
    <div style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
      <NavBar />
      <div className="about-content">
        <h1>About Me</h1>
        <img id="my-image" src={keen}></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum euismod purus, ac tincidunt mauris tempus id. Nulla facilisi. Praesent in vestibulum risus. Nunc tincidunt urna elit, vitae bibendum purus euismod ac. Aliquam gravida suscipit enim in bibendum. Integer quis nibh at nunc volutpat aliquam. Donec ut justo et nunc dictum bibendum. Fusce eu lectus vel massa consequat mollis nec at quam. Vestibulum sed risus tellus. Nullam viverra suscipit risus, euismod accumsan diam dignissim eget. Etiam auctor ante vel odio blandit, id iaculis mauris iaculis. Cras hendrerit erat eget enim mollis posuere.</p>
        <p>Suspendisse nec libero vel tortor ullamcorper ultricies id quis sapien. Donec sit amet magna vitae mauris molestie iaculis. Sed euismod mauris eget consequat pulvinar. Sed nec odio purus. Nullam tincidunt magna a dolor malesuada, at aliquet urna facilisis. Duis iaculis tristique velit, sit amet fermentum est cursus a. Suspendisse convallis, elit sed vulputate blandit, nulla erat euismod massa, vitae dapibus enim eros a est. Nam aliquet, odio eget lacinia faucibus, lectus purus facilisis nisi, eget bibendum massa libero sit amet est. Duis vitae ex augue.</p>
        <p>In vestibulum congue diam, at consectetur ante sollicitudin sit amet. Nulla facilisi. Sed venenatis nulla in dui eleifend, ac volutpat nibh cursus. Praesent ultricies ullamcorper dolor vitae bibendum. In hac habitasse platea dictumst. Aliquam euismod sit amet elit a bibendum. Curabitur non feugiat urna, non consequat felis. Sed tristique, ipsum eget pellentesque scelerisque, erat felis faucibus est, in molestie turpis orci eget nulla. Nam dapibus tincidunt nisl, eu rutrum leo mattis id. Duis mollis magna in erat placerat, non cursus massa tristique. Vivamus ut mi a metus facilisis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse et justo eget magna consectetur malesuada vitae ac nisl.</p>  
        <p>Phasellus lobortis odio at magna lacinia fringilla. Pellentesque eu ex varius, dapibus ante in, accumsan leo. Integer placerat lacinia nulla, quis vestibulum eros vehicula quis. Nullam laoreet diam nisl, quis sagittis erat tincidunt id. Sed viverra, justo et varius finibus, lectus enim gravida odio, eu sollicitudin elit elit non velit. Donec tristique orci quis justo suscipit, sed volutpat nunc luctus. Suspendisse in ipsum quam. Suspendisse vel enim dolor. Nulla sagittis auctor ipsum, ac viverra magna. Aenean eu lectus varius, hendrerit magna ut, eleifend neque.</p>
        <p>Quisque eget leo risus. Aenean pharetra, dui nec blandit tincidunt, libero risus consequat nisl, non vehicula</p>
      </div>
    </div>
  );
}

export default AboutPage;
