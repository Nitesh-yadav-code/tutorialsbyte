'use client'
import React from 'react'
import parse, { attributesToProps } from "html-react-parser";
import Image from "next/image";

import CodeWidget from './CodeWidget';

function Content({content}) {
  
    const options = {
        replace: domNode => {
          if (domNode.attribs && domNode.name === 'img') {
            const props = attributesToProps(domNode.attribs);
            return <Image {...props} alt=""  sizes="" />;
          }

          if(domNode.attribs && (domNode.attribs.class === 'wp-block-prismatic-blocks' || domNode.attribs.class === 'wp-block-code' )){
            const code = domNode.children;
            return <CodeWidget code ={code} />
          }
          // if(domNode.attribs && domNode.name === 'code'){
          //   const code = domNode.children;
          //   return <CodeWidget code ={code} />
          // }

        }
      };
  return parse(content, options);
}

export default Content