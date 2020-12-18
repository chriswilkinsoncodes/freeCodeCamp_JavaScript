function pairElement(str) {
    let strand = []
    let pairs = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C',
    }
    str.split('').forEach(el =>
      strand.push([el, pairs[el]])
    )
    return strand;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));
  console.log(pairElement("CTC"));
