---
layout: work
title: "Slurry: 3D Laser Scanner"
type: "work"
thumb: model.jpg
---

![head1](scanner1.png)

![head2](scanner2.png)

![real](real.jpg)

Project Slurry is my graduation project which dedicates to develop a scalable and multifunctional 3D laser scanner. The original implementation built on KUKA iiwa 7DoF robot arm and a structural laser projector surrounded by 4 industrial cameras. The texture of structural stripe corresponds to the surface curve, and patches of local mesh come into being a 3D model by global registration algorithm.

![stripe]({{page.url}}stripe.png)

![triangle]({{page.url}}triangle.jpg)

This project  demands comprehensive application of variety skills such as mechanical design, embedded board design, optics, robot control and computer vision. 
Currently we use it as medical guidance locator for chest cancer puncture. We also have a near plan to apply it for collection and exhibition digitalization.

![medical1]({{page.url}}medical1.png)

![medical2]({{page.url}}medical2.png)



<iframe src="https://player.vimeo.com/video/241186689?loop=1&title=0&byline=0&portrait=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>



> In recent years, the real object imaging technology that aims to acquire the shape of target surface and high precision texture has become the development trend of vision measurement technology. There are widely demands in industry, cultural relics and medical fields to build 3D digital models of object.
> In this paper, the line structured light imaging is combined with multi-camera imaging technology, and the 3D real image of the object is obtained by scanning. A system which is designed to obtain 3D shape of object through the line structured light is implemented; the surface texture color is obtained through the stereo vision. The calibration algorithm of camera intrinsic and extrinsic parameters based on chessboard is studied in detail, and the calibration method based on planar target and parallel line is explored. The center of laser line extraction method is improved, by which the anti-noise performance is improved and the accuracy of sub-pixel is achieved. Vision algorithm, control flow and graphic user interface is implemented based on Qt, OpenCV, VTK, POCO libraries. 
> Experimental results show that the method can calibrate parameters of visual system automatically, and measure geometry depth using line structure light within the error of 0.5mm; it can obtain the target surface point cloud data with color texture by a scanning and processing process. 
