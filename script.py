import re
import glob

# Remove brand-text from HTML files
files = glob.glob('c:/Projects/Meghdoot/*.html')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = re.compile(r'\s*<div class=\"brand-text\">\s*<span class=\"brand-meghdoot\">MEGHDOOT</span>\s*<span class=\"brand-motors\">MOTORS</span>\s*</div>')
    new_content = pattern.sub('', content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {file}')

# Update CSS for .site-logo and .mass-logo
css_file = 'c:/Projects/Meghdoot/css/components.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace .site-logo block
css_content = re.sub(
    r'\.site-logo \{[\s\S]*?\}', 
    '.site-logo {\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n}', 
    css_content,
    count=1
)

# Remove hover state for .site-logo
css_content = re.sub(
    r'@media \(hover: hover\) \{\s*\.site-logo:hover \{[\s\S]*?\}\s*\}',
    '',
    css_content
)

# Replace .mass-logo block
css_content = re.sub(
    r'\.header-actions \.mass-logo \{[\s\S]*?\}',
    '.header-actions .mass-logo {\\n  height: 44px;\\n  width: auto;\\n  object-fit: contain;\\n}',
    css_content,
    count=1
)

css_content = re.sub(
    r'\.header-actions \.mass-logo \{[^}]*padding:[^}]*\}',
    '.header-actions .mass-logo {\\n    height: 44px;\\n  }',
    css_content
)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css_content)
print('Updated CSS')
