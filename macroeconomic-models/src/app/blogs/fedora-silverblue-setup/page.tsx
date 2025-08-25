import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Fedora Silverblue Setup Guide - Model Stack',
  description: 'Here are some steps I would take after installing Fedora Silverblue',
};

export default function FedoraGuide() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Guide
          </span>
          <span className="text-xs text-gray-500">2023-12-25</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fedora Silverblue Setup Guide</h1>
        <p className="text-xl text-gray-600">
          Here are some steps I would take after installing Fedora Silverblue
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
        <div className="prose prose-gray max-w-none space-y-6 [&>p]:leading-relaxed [&>p]:pl-4 [&>p]:mb-4">
          <p>Feel free to contact me if you have any question with these instructions! Either through email or on the website's GitHub repository.</p>
          
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-6">
            Many of the contents here are borrowed from <a href="https://mutschler.dev/linux/fedora-post-install/" className="text-blue-600 hover:underline">Willi Mutschler</a>. However, since I work with Fedora Silverblue rather than Fedora Workstation, many of the installation steps would be different due to the immutable nature of Silverblue. For that reason, I think this post would still show its value.
          </blockquote>

          <p>The version used is Fedora Silverblue 39 at the time this post is written. Most of the software is probably more personal and economists-oriented.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Background Info for Silverblue</h2>
          
          <p>Silverblue differs from the normal Fedora Workstation as it is immutable, meaning the system files are read-only and updates are installed as a whole. Put it more technically, <code className="bg-gray-100 px-2 py-1 rounded text-sm">/</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">/usr</code> and everything below it is read-only, while stuffs under <code className="bg-gray-100 px-2 py-1 rounded text-sm">/var</code> are user-changeable. For more information, please consult <a href="https://docs.fedoraproject.org/en-US/fedora-silverblue/technical-information/" className="text-blue-600 hover:underline">Fedora Docs</a>.</p>

          <p>This means Silverblue needs to install applications and packages differently from Workstation, i.e. <code className="bg-gray-100 px-2 py-1 rounded text-sm">dnf install</code> will not work, more specifically, there are 3 ways to do it.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Flatpak</h3>
          
          <p>Flatpak is the predominant way to install applications, as it places each application into a sandbox, aligning with the immutable approach of the Silverblue.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Toolbox</h3>
          
          <p>Toolbox creates an isolated container to install packages and softwares, it is almost like a emulator of the host system, or like a self-contained system that is attached to the host system.</p>

          <p>To create a toolbox, you can use the command:</p>
          
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>create toolbox --container [name of container]</code>
          </pre>

          <p>After entering the toolbox:</p>
          
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>toolbox enter [name of container]</code>
          </pre>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Layering</h3>
          
          <p>Layering is against the immutable approach of the system, but, many packages benefits from layering as it is layer upon the system and has a more direct connection with the system.</p>

          <p>To layer a package onto the system:</p>
          
          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>rpm-ostree install [package name]</code>
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Graphics</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Wayland & Xorg</h3>
          
          <p>Fedora uses Wayland as default and will depreciate Xorg gradually, but in practice the experience is quite awful if you have a Nvidia card with drivers not properly set up.</p>

          <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Use Xorg</h4>
          
          <p>By using Xorg session, I can solve most displaying issues with VSCode and Obsidian (Both installed through Flatpak). To use Xorg instead of Wayland, uncomment <code className="bg-gray-100 px-2 py-1 rounded text-sm">WaylandEnable=false</code> and add <code className="bg-gray-100 px-2 py-1 rounded text-sm">DefaultSession=gnome-xorg.desktop</code> to the [daemon] section of <code className="bg-gray-100 px-2 py-1 rounded text-sm">/etc/gdm/custom.conf</code></p>

          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`sudo nano /etc/gdm/custom.conf
# [daemon]
# WaylandEnable=false
# DefaultSession=gnome-xorg.desktop

# Cuda libs for Xorg
rpm-ostree install xorg-x11-drv-nvidia-cuda
rpm-ostree install xorg-x11-drv-nvidia-cuda-libs`}</code>
          </pre>

          <p>And then reboot for the change to take effect.</p>

          <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Nvidia & Wayland</h4>
          
          <p>To install the proprietary Nvidia driver:</p>

          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`rpm-ostree update

# Nvidia proprieatary driver
rpm-ostree install akmod-nvidia

# The Nvidia proprieatary driver doesn't support VAAPI, but there is a wrapper that can bridge NVDEC/NVENC with VAAPI
rpm-ostree install nvidia-vaapi-driver

# Provides more codec for video streaming
rpm-ostree install libavcodec-freeworld`}</code>
          </pre>

          <p>After all the installations, follow the instruction and reboot the system:</p>

          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>systemctl reboot</code>
          </pre>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Softwares</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Foliate</h3>
          
          <p>I really like this handy software to read my <code className="bg-gray-100 px-2 py-1 rounded text-sm">.epub</code> books, but it has some problem accessing the graphics card or some sort, resulting in the page not being able to render properly. I think the problem mostly lies with the fact of lack of permission.</p>

          <p>The simplest way to fix this issue is to disable GPU acceleration for Foliate, to do that:</p>

          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Install <strong>Flatseal</strong> either by GUI or command line</li>
            <li>Disable the <strong>GPU acceleration</strong> option for Foliate</li>
            <li>Problem fixed!</li>
          </ol>

          <p>Since <strong>Foliate</strong> is not a very demanding software, even without GPU acceleration the whole thing runs smoothly enough for me to not search for other solutions.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">MATLAB</h3>

          <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Installation</h4>

          <p>Always refer to the official installation guide for more info.</p>

          <ol className="list-decimal list-inside space-y-4 ml-4">
            <li>
              <p>After the downloading the MATLAB installation file, unzip it with:</p>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                <code>unzip matlab_R2023b_glnxa64.zip -d matlab_R2023b_glnxa64</code>
              </pre>
            </li>
            <li>
              <p>Navigate to <code className="bg-gray-100 px-2 py-1 rounded text-sm">matlab_R2023b_glnxa64</code> directory and launch the installer with:</p>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                <code>./install</code>
              </pre>
            </li>
            <li>
              <p>Install MATLAB under <code className="bg-gray-100 px-2 py-1 rounded text-sm">/var</code> directory so you have full permission, the way I do it is:</p>
              <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                <code>/var/home/$USER/bin</code>
              </pre>
            </li>
          </ol>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Desktop Entry</h4>

          <p>Here is a reference for what you need to put in for the desktop entry:</p>

          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/var/home/$USER/bin/MATLAB/R2023b/bin/matlab -desktop
Name=MATLAB R2023b
Icon=/var/home/$USER/bin/MATLAB/bin/glnxa64/cef_resources/matlab_icon.png
Categories=Development;Math;Science
Comment=Scientific computing environment
StartupNotify=true
StartupWMClass=sun-awt-X11-XFramePeer
MimeType=text/x-matlab`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">LaTeX</h3>

          <p>I use LaTeX with VSCode for all my writings, but to use this combo is a bit harder in Silverblue. My approach is to install LaTeX in a toolbox and then let VSCode (and LaTeX Workshop) communicate with LaTeX stored inside the toolbox.</p>

          <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Install TeX Live</h4>

          <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`# Create the LaTeX container
toolbox create --container LaTeX
toolbox enter LaTeX

# Add the Tex Live repository if needed
sudo dnf config-manager --add-repo https://mirrors.tuna.tsinghua.edu.cn/texlive/fedora/

# Install the package
sudo dnf install texlive texlive-scheme-full texlive-extra-utils

# Update the packages
sudo dnf update texlive*

# Verify the installation
tex --version`}</code>
          </pre>

          <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">VSCode and LaTeX Workshop extension</h4>

          <p>Simply use the flatpak to install VSCode, the community maintained version works fine for me, or you could work a way to install the official one by layering or through toolbox.</p>

          <p>After installing VSCode, use the extension shop to install LaTeX Workshop extension.</p>

          <p>Once LaTeX Workshop is install, we need to configure it so that it can communicate with LaTeX in the toolbox, for that, we need to edit the <code className="bg-gray-100 px-2 py-1 rounded text-sm">settings.json</code> of VSCode</p>

          <p>This would allow LaTeX Workshop to communicate with LaTeX inside the toolbox container.</p>

        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Topics</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Fedora Silverblue</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Linux Setup</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Development Environment</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Academic Tools</span>
        </div>
      </div>
      </div>
    </>
  );
}