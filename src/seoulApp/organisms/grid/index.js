import React from 'react';
import './.scss'

export default ({components}) => {
  // component wrap into col
  components.forEach((value, index) => {
    components[index] = <div className="grid-col">{value}</div>
  });

  return (
    <section class="grid-wrapper">
      <main class="grid">
        {components}
      </main>
    </section>
  );
}
