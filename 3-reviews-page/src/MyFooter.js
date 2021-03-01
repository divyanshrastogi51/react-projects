import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

export default function MyFooter() {
  return (
    <Footer
      columns={[
        {
          icon: (
            <img src="https://media.istockphoto.com/vectors/smile-face-icon-isolated-on-white-background-vector-illustration-vector-id1173300976?k=6&m=1173300976&s=612x612&w=0&h=Bz_FFkZppBhr2-EARSi9M73k15FackKb45aJ3PQ__zU=" alt="" />
          ),
          title: 'Thanks for Visiting ',
          openExternal: true,
          className: "Footer",
        },
      ]}
      bottom="Made with ❤️ by Divyansh Rastogi. Inspired from John Smilga"
    />
  )
}
