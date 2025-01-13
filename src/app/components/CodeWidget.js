import React, { useEffect, useState } from 'react'
import Prism from 'prismjs';
import "prismjs/components/prism-java.min";
import "prismjs/components/prism-jsx.min";
import { MdOutlineCopyAll } from "react-icons/md";
import Tippy from '@tippyjs/react';

const CodeWidget = ({ code }) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    let language = code[0].attribs.class;
    if (language == "language-" || language == undefined) {
        language = "language-js";
    }

    const codeContent = code[0].children[0]?.data || "Oops! this one is empty.";
    const [copyTip, setCopyTip] = useState("Copy");

    function handleCopy() {
        setCopyTip("Copied");
        navigator.clipboard.writeText(codeContent);
    }
    return (
        <div>
            <div className="flex justify-between -m-4 mx-2">
                <p></p>
                <div className="top-right mr-3 -mb-10 ">
                    <Tippy className={`${copyTip == 'Copied' ? "bg-green-400" : ""} rounded-md px-1`} content={copyTip} duration={800}>
                        <button onMouseOut={()=>{
                            setCopyTip("Copy")
                        }} onClick={handleCopy}>
                            <MdOutlineCopyAll className='-mb-96 text-slate-100' size={28} />
                        </button>
                    </Tippy>
                </div>
            </div>
            <pre className='max-h-[500px] overflow-y-scroll mt-5 language-js'>
                <code className='selection:bg-gray-600'>
                    {codeContent}
                </code>

            </pre>

        </div>
    )
}

export default CodeWidget