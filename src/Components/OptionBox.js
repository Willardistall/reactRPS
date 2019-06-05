import React from "react";
import { Image, } from "semantic-ui-react";


const OptionBox = (rock) => (
<Image src={rock.img} 
        size='small' centered
        onCLick={() => rock.optionClick(rock.name)} 
        />
);

const OptionBox2 = (paper) => (
  <Image src={paper.img} 
          size='small' centered
          onCLick={() => paper.optionClick(paper.name)} 
          />
  );

  const OptionBox3 = (scissor) => (
    <Image src={scissor.img} 
            size='small' centered
            onCLick={() => scissor.optionClick(scissor.name)} 
            />
    );

export default OptionBox;
