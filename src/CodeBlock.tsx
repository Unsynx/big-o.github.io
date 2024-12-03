import { Card, CardContent, CardHeader } from "@/components/ui/card"
import './Code.css'
import './index.css'
import { ReactElement } from "react";
import { CodeEntry } from "./lib/codeData";


function parseCode(nth: number, text: string, color: string) {
    var result: ReactElement[] = []
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
        var style = i + 1 === nth ? {background: color} : {}
        result.push(
        <div className="code_row">
            <p className={`code_row_num ${i + 1 === nth ? 'highlight' : ''}`} style={style}>{i}</p>
            <pre>{lines[i]}</pre>
        </div>
        )
    }
    return result;
}


interface CodeBlockProps {
    n: number;
    codeData: CodeEntry
}

export function CodeBlock(props:CodeBlockProps) {
  return (
    <Card>
        <CardHeader>{props.codeData.name}</CardHeader>
        <CardContent className="code_body">
            <div className="sub_body">
                <div>{parseCode(props.n, props.codeData.code, props.codeData.color)}</div>
            </div>
        </CardContent>
    </Card>
  )
}